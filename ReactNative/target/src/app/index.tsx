import { useCallback, useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { Button } from '../components/Button';
import { HomeHeader } from '../components/HomeHeader';
import { List } from '../components/List';
import { Target, TargetProps } from '../components/Target';

import { router, useFocusEffect } from 'expo-router';
import { colors } from '../theme';

import { Loading } from '../components/Loading';
import { useTargetDatabase } from '../database/useTargetDatabase';

import { useTransactionDatabase } from '../database/useTransactionDatabase';
import { numberToCurrency } from '../utils/numberToCurency';

type SummaryProps = {
  total: string;
  input: {
    label: string;
    value: string;
  };
  output: {
    label: string;
    value: string;
  };
};

export default function Index() {
  const transactionDatabase = useTransactionDatabase();
  const targetDatabase = useTargetDatabase();
  const [targets, setTargets] = useState<TargetProps[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [summary, setSummary] = useState<SummaryProps>({
    total: numberToCurrency(0),
    input: {
      label: 'Entradas',
      value: numberToCurrency(0),
    },
    output: {
      label: 'Saídas',
      value: numberToCurrency(0),
    },
  });

  async function fetchTargets(): Promise<TargetProps[]> {
    try {
      setIsFetching(true);
      const response = await targetDatabase.listBySavedValue();

      return response.map((target) => ({
        id: String(target.id),
        name: target.name,
        current: numberToCurrency(Number(target.current)),
        percentage: target.percentage.toFixed(0) + '%',
        target: numberToCurrency(Number(target.amount)),        
      }));

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as metas.');
      console.log(error);

      return [];
    }
  }

  async function calculateSummary() {
    const transactions = await transactionDatabase.getAllTransactions();

    const inputTotal = transactions
      .filter((t) => t.type === 'input')
      .reduce((acc, t) => acc + t.amount, 0);

    const outputTotal = transactions
      .filter((t) => t.type === 'output')
      .reduce((acc, t) => acc + t.amount, 0);

    setSummary({
      total: numberToCurrency(inputTotal - outputTotal),
      input: {
        label: 'Entradas',
        value: numberToCurrency(inputTotal),
      },
      output: {
        label: 'Saídas',
        value: numberToCurrency(outputTotal),
      },
    });
  }

  async function fetchData() {
    const targetsDataPromise = await fetchTargets();
    const [targetData] = await Promise.all([targetsDataPromise]);

    setTargets(targetData);
    calculateSummary()
    setIsFetching(false);
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
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HomeHeader data={summary} />

      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 30,
        }}
      >
        <List
          title="Metas"
          data={targets}
          renderItem={({ item }) => (
            <Target
              data={item}
              onPress={() => {
                router.navigate(`/in-progress/${item.id}`);
              }}
            />
          )}
          keyExtractor={(item, index) =>
            item.id !== undefined && item.id !== null
              ? String(item.id)
              : String(index)
          }
          emptyMessage="Nenhuma meta cadastrada"
          containerStyle={{ paddingHorizontal: 24 }}
        />
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <Button
            title="Adicionar Meta"
            onPress={() => {
              router.navigate('/target');
            }}
          />
        </View>
      </View>
    </View>
  );
}
