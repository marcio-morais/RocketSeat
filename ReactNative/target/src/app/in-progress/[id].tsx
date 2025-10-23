import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { Alert, View } from 'react-native';
import { Button } from '../../components/Button';
import { List } from '../../components/List';
import { PageHeader } from '../../components/PageHeader';
import Progress from '../../components/Progess';
import { Transaction, TransactionProps } from '../../components/Transaction';
import { colors } from '../../theme';

import { useCallback, useState } from 'react';
import { Loading } from '../../components/Loading';
import { useTargetDatabase } from '../../database/useTargetDatabase';
import { useTransactionDatabase } from '../../database/useTransactionDatabase';
import { numberToCurrency } from '../../utils/numberToCurency';

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();
  const [transactionsData, setTransactionsData] = useState<TransactionProps[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [details, setDetails] = useState({
    name: '',
    current: '',
    target: '',
    percentage: '',
  });

  const targetDatabase = useTargetDatabase();  
  const transactionDatabase = useTransactionDatabase();

  async function fetchTargetDetails() {
    const target = await targetDatabase.getTargetById(Number(params.id));

    try {
      if (target) {

        setDetails({
          name: target.name,
          current: numberToCurrency(Number(target.current)),
          target: numberToCurrency(Number(target.amount)),
          percentage: ((Number(target.current) / Number(target.amount)) * 100).toFixed(0),
        });

        setIsFetching(false);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar os detalhes da meta.');
    }
  }

  async function fetchTransactions() {
      try {
        setIsFetching(true);

        const response = await transactionDatabase.listBySavedValue(Number(params.id));
        
        const mappedTransactions = response.map((transaction) => ({
          id: String(transaction.id),
          value: numberToCurrency(Number(transaction.amount)),
          data: transaction.created_at ? String(transaction.created_at) : '',
          description: transaction.observations ?? '',
          type: transaction.type,
        }));  

        setTransactionsData(mappedTransactions);

      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar as transações.');
        console.log(error);
        
        return [];
      }
  }

  async function fetchData() {
    const fetchDetailsPromise = fetchTargetDetails();
    const transactionsPromise = fetchTransactions();

    await Promise.all([fetchDetailsPromise, transactionsPromise])

    setIsFetching(false);
  }

  async function handleRemoveTransaction(id: string) {
    try {
      setIsFetching(true);

      await transactionDatabase.deleteTransaction(id);
      await fetchTransactions();

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível remover a transação.');
    }finally {
      setIsFetching(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );  

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{ flex: 1, padding: 24, gap: 32, backgroundColor: colors.white }}
    >
      <PageHeader
        title={details.name}
        subtitle={'Detalhes da meta'}
        editButton={{
          icon: 'edit',
          onPress: () => {
            router.navigate(`/target?id=${params.id}`);
          },          
        }}
        removeButton={{
          icon: 'delete',
          onPress: () => {
            router.navigate(`/target/remove?id=${params.id}`);
          },
        }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactionsData}
        renderItem={({ item }) => (
          <Transaction 
          data={item} 
            onRemove={() => router.navigate(`/transaction/remove?id=${item.id}&target_id=${params.id}`)}
            onEdit={() => router.navigate(`/transaction/edit?id=${item.id}&target_id=${params.id}`)}
          />
        )}
        emptyMessage="Nenhuma transação encontrada"
      />

      <Button
        title="Adicionar Transação"
        onPress={() => {
          router.navigate(`/transaction/create?target_id=${params.id}`);
        }}
      />
    </View>
  );
}
