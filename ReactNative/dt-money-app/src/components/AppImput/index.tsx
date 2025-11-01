import { colors } from "@/shared/colors";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  leftIconName?: keyof typeof MaterialIcons.glyphMap;
  label?: string;
}

export const AppInput = <T extends FieldValues>({
  control,
  name,
  leftIconName,
  label,
  ...rest
}: AppInputParams<T>) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const checkFocus = () => {
    if (inputRef.current) {
      setIsFocused(inputRef.current.isFocused());
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View className="w-full">
          {label && <Text className={clsx("mb-2 m-3 text-base", isFocused ? "text-accent-brand" : "text-gray-600")}>{label}</Text>}
          <TouchableOpacity className="flex-row items-center justify-between border-b-[1px] border-gray-600 px-3 py-2 h-16">
            {leftIconName && (
              <MaterialIcons
                name={leftIconName}
                size={24}
                color={colors.gray[600]}
                className="mr-2"
              />
            )}
            r
            <TextInput
              onChangeText={onChange}
              placeholderTextColor={colors.gray[700]}
              value={value}
              className="flex-1 text-white text-base"
              onFocus={checkFocus}
              ref={inputRef}
              {...rest}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
