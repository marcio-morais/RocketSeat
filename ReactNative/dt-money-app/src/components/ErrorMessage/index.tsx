import { colors } from "@/shared/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { FC, PropsWithChildren } from "react";
import { Text, View } from "react-native";



export const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className="flex-row items-center gap-4 mt-2">
      <MaterialIcons name="error-outline" size={16} color={colors["accent-brand-background-primary"]} />
      <Text className="text-sm text-accent-red-background-primary">{children}</Text>
    </View>
  );
};
