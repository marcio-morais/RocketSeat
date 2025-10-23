import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { Button } from '../components/Button';
import { CurrencyInput } from '../components/CurrencyInput';
import { Input } from '../components/Input';
import { PageHeader } from '../components/PageHeader';
import { useTargetDatabase } from '../database/useTargetDatabase';
import { colors } from '../theme';

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const params = useLocalSearchParams<{ id?: string }>();
  const targetdatabase = useTargetDatabase();

  function handleSave() {
    if (!params.id) {
      createTarget();
    } else {
       updateTarget();
    }
    if (!name.trim() || amount <= 0) {
      return alert('Por favor, preencha todos os campos corretamente.');
    }

    setIsProcessing(true);
  }

  async function createTarget() {
    try {
      await targetdatabase.createTarget({ name, amount });

      Alert.alert('Sucesso', 'Meta criada com sucesso!', [
        {
          text: 'Ok',
          onPress: () => {
            router.back();
          },
        },
      ]);

      setName('');
      setAmount(0);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível criar a meta.');

      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  }

  async function updateTarget() {
    try {
      if (!params.id) return;

      await targetdatabase.updateTarget({
        id: Number(params.id),
        name,
        amount,
      });

      Alert.alert('Sucesso', 'Meta atualizada com sucesso!', [
        {
          text: 'Ok',
          onPress: () => {
            router.back();
          },
        },
      ]);

      setName('');
      setAmount(0);

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a meta.');
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  }

  async function fetchDetails() {
    try {
      if (!params.id) return;
      const target = await targetdatabase.getTargetById(Number(params.id));

      if (target) {
        setName(target.name);
        setAmount(target.amount);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar os detalhes da meta.');
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchDetails();
    }
  }, [params.id]);

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: colors.gray[100] }}>
      <PageHeader title="Meta" subtitle="Detalhes da sua meta" />
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <Input
          label="Nome"
          placeholder="Ex: Viagem, Carro, etc"
          value={name}
          onChangeText={setName}
        />
      </View>

      <CurrencyInput
        label="Valor"
        placeholder="Ex: 1000"
        value={amount}
        onChangeValue={(value) => setAmount(value ?? 0)}
      />

      <Button title="Salvar" onPress={handleSave} isLoading={isProcessing} />
    </View>
  );
}
