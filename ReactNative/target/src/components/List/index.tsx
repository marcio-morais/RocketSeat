import {
    FlatList,
    FlatListProps,
    StyleProp,
    Text,
    View,
    ViewStyle,
} from 'react-native';
import { colors } from '../../theme';
import { Separator } from '../Separator';
import { styles } from './style';

export type ListProps = FlatListProps<any> & {
  // Adicione aqui as props específicas do seu componente
};

type Props<T> = FlatListProps<T> & {
  title: string;
  emptyMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export function List<T>({
  data,
  title,
  emptyMessage,
  containerStyle,
  renderItem,
  ...rest
}: Props<T>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyMessage}>{emptyMessage}</Text>}
        {...rest}
      />
    </View>
  );
}
