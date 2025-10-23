import { MaterialIcons } from '@expo/vector-icons';
import { ColorValue, Pressable, PressableProps, Text } from "react-native";
import { colors } from '../../theme';
import { styles } from "./style";

type TransactionTypeOptionProps = PressableProps & {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  isSelected: boolean;
  selectedColor?: ColorValue;  
};

export function TransactionTypeOption({
  title,
  icon,
  isSelected,
  selectedColor,
  ...rest
}: TransactionTypeOptionProps) {
  return (
    <Pressable style={[styles.option, isSelected && { backgroundColor: selectedColor }]} {...rest}>
      <MaterialIcons name={icon} size={24} color={isSelected ? colors.white : colors.gray[400]} />
      <Text style={[styles.title, isSelected && { color: colors.white }]}>{title}</Text>
    </Pressable>
  );
}
