import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../theme';
import { TransactionTypes } from '../../utils/TransactionTypes';
import { styles } from './style';

export type TransactionProps = {
  id: string;
  value: string;
  data: string;
  description: string;
  type: TransactionTypes
}

type Props = {
  data: TransactionProps;
  onRemove: () => void;
  onEdit: () => void;
}

export function Transaction({ data, onRemove, onEdit }: Props) {
  return (
    <View style={styles.container}>
        <MaterialIcons
          name={
            data.type === TransactionTypes.Input
            ? 'arrow-upward' 
            : 'arrow-downward'
          }
          size={24}
          color={
            data.type === TransactionTypes.Input
            ? colors.green[500] 
            : colors.red[500]
        }
        />
      <View style={styles.info}>        
        <Text style={styles.value}>{data.value}</Text>
        <Text style={styles.description}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {data.data} {data.description && `∙ ${data.description}`}
        </Text>
      </View>
      
      <TouchableOpacity onPress={onEdit}>
        <MaterialIcons
          name="edit"          
          size={24}
          color={colors.gray[500]}
        />
      </TouchableOpacity> 
      <TouchableOpacity onPress={onRemove}>
        <MaterialIcons
          name="delete"          
          size={24}
          color={colors.red[500]}
        />
      </TouchableOpacity> 
    </View>
  );
}
