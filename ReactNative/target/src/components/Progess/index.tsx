import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { styles } from './style';

type SavedValue = {
  current: string;
  target: string;
  percentage: string;
};

type ProgressProps = {
  data: SavedValue;
};

export default function Progress({ data }: ProgressProps) {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>valor guardado</Text>

      <View style={styles.status}>
        <Text style={styles.value}>
          {data.current}
          <Text style={styles.target}> de {data.target}</Text>
        </Text>

        <Text style={styles.percentage}>{data.percentage}%</Text>
      </View>

      <View style={styles.progress}>
        <View style={[styles.currentProgress , { width: `${parseFloat(data.percentage)}%` }]} />
      </View>
    </View>
  );
}
