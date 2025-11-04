import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppImput";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";

export interface FormLoginParms {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormLoginParms>();

  const onSubmit = (data: FormLoginParms) => {
    console.log(data);
  };

  return (
    <View className="mt-10 w-full gap-4">
      <AppInput
        control={control}
        name="email"
        lable="Email"
        placeholder="miguel@gestoque.com.br"
      />

      <AppInput
        control={control}
        name="password"
        lable="Senha"
        placeholder="********"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-full">
        <AppButton iconName="arrow-forward">Login</AppButton>

        <View className="mt-6 items-start gap-4">
          <Text className="text-sm text-center text-gray-500">
            Don't have an account?
          </Text>
          <AppButton mode="outline" iconName="arrow-forward">
            Register
          </AppButton>
        </View>
      </View>
    </View>
  );
};
