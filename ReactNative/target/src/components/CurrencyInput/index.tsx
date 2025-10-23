import { Text, View } from 'react-native';
import Input, { CurrencyInputProps } from 'react-native-currency-input';
import { colors } from '../../theme';
import { styles } from './style';

type InputProps = CurrencyInputProps & {
  label: string;
};

export function CurrencyInput({ label, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
      >
        {label}
      </Text>
      <Input
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        prefix='R$ '
        delimiter='.'
        separator=','
        precision={2}
        minValue={0}
        maxValue={999999999}
        keyboardType='numeric'
        {...props}
      />
    </View>
  );
}
