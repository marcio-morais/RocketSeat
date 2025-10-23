import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';
import { Button } from '../../components/Button';
import { CurrencyInput } from '../../components/CurrencyInput';
import { Input } from '../../components/Input';
import { PageHeader } from '../../components/PageHeader';
import { TransactionType } from '../../components/TransactionType';
import { useTransactionDatabase } from '../../database/useTransactionDatabase';
import { colors } from '../../theme';
import { TransactionTypes } from '../../utils/TransactionTypes';

export default function Transaction() {
  const params = useLocalSearchParams<{
    action: string;
    id: string;
    target_id: string;
  }>();
  const transactionDatabase = useTransactionDatabase();
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState(TransactionTypes.Input);
  const [name, setName] = useState<string>('');
  const [observations, setObservations] = useState<string>('');
  const [isFetching, setIsFetching] = useState<boolean>(false);

  async function createTransaction() {
    try {
      if (amount <= 0) {
        return Alert.alert('Erro', 'Informe um valor válido.');
      }

      setIsFetching(true);

      await transactionDatabase.createTransaction({
        target_id: Number(params.target_id),
        amount: type === TransactionTypes.Output ? amount * -1 : amount,
        type: type,
        observations: observations,
        name: name,
      });

      Alert.alert('Sucesso', 'Transação criada com sucesso!', [
        {
          text: 'Ok',
          onPress: () => {
            router.back();
          },
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível criar a transação.');
    } finally {
      setIsFetching(false);
    }
  }

  async function updateTransaction() {
    try {
      if (amount <= 0) {
        return Alert.alert('Erro', 'Informe um valor válido.');
      }

      console.log({
        name,
        amount,
        type,
        observations,
        target_id: params.target_id,
      });

      setIsFetching(true);
      await transactionDatabase.updateTransaction({
        id: params.id,
        target_id: Number(params.target_id),
        amount: type === TransactionTypes.Output ? amount * -1 : amount,
        type: type,
        observations: observations,
        name: name,
      });

      Alert.alert('Sucesso', 'Transação atualizada com sucesso!', [
        {
          text: 'Ok',
          onPress: () => {
            router.back();
          },
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível atualizar a transação.');
    } finally {
      setIsFetching(false);
    }
  }

  async function deleteTransaction() {
    try {

      Alert.alert('Atenção', `Você tem certeza que deseja remover a transação ${name}?`, [
        {
          text: 'Cancelar',
          onPress: () => {
            router.back();
          },
        },
        {
          text: 'Remover',
          onPress: async () => {
            setIsFetching(true);
            await transactionDatabase.deleteTransaction(params.id);
            Alert.alert('Sucesso', 'Transação removida com sucesso!', [
              {
                text: 'Ok',
                onPress: () => {
                  router.back();
                },
              },
            ]);
          },
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível remover essa transação.');
    } finally {
      setIsFetching(false);
    }
  }

  async function handle() {
    if (params.action === 'create') {
      await createTransaction();
    } else if (params.action === 'edit') {
      await updateTransaction();
    }
  }

  async function fetchTransactions() {
    const transaction = await transactionDatabase.getTransactionById(
      Number(params.id),
    );

    try {
      if (transaction) {
        setName(transaction.name);
        setAmount(Number(transaction.amount));
        setObservations(transaction.observations ?? '');
        setType(
          transaction.amount >= 0
            ? TransactionTypes.Input
            : TransactionTypes.Output,
        );
      }

      if (params.action === 'remove') {
        await deleteTransaction();
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar os detalhes da meta.');
    } finally {
      setIsFetching(false);
    }
  }

  async function fetchData() {
    const transactionsPromise = fetchTransactions();

    await Promise.all([transactionsPromise]);

    setIsFetching(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View
      style={{ flex: 1, padding: 24, backgroundColor: colors.white, gap: 32 }}
    >
      <PageHeader
        title={
          (params.action === 'create'
            ? `Nova `
            : params.action === 'edit'
              ? `Editar `
              : 'Remover ') + 'transação'
        }
        subtitle={`A cada valor guardado você está mais perto do seu objetivo`}
      />

      <View style={{ gap: 8 }}>
        <TransactionType selected={type} onChange={setType} />
      </View>

      <View style={{ marginTop: 32, gap: 4 }}>
        <Input
          label="Nome"
          placeholder="Ex: Salário, venda de algo..."
          value={name}
          onChangeText={setName}
        />

        <CurrencyInput
          label="Valor"
          value={amount}
          onChangeValue={(value) => setAmount(value ?? 0)}
        />

        <Input
          label="Observações (opcional)"
          placeholder="Ex: Alguma obervacao..."
          value={observations}
          onChangeText={setObservations}
        />
      </View>

      <Button
        title="Salvar"
        onPress={() => {
          handle();
        }}
        isLoading={isFetching}
      />
    </View>
  );
}
