import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppImput";
import { useAuthContext } from "@/context/auth.context";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { loginFormSchema } from "../LoginForm/schema";

export interface FormLoginParms {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormLoginParms>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginFormSchema),
  });

  const { handleAuthenticate } = useAuthContext();

  const onSubmit = async (userData: FormLoginParms) => {
    try {      
      await handleAuthenticate(userData);

    } catch (error) {
      if(error instanceof AxiosError) {
        console.log(error.response?.data);
        return;
      }
    }
  };

  const navigate = useNavigation<NavigationProp<PublicStackParamsList>>();

  return (
    <>
      <AppInput
        control={control}
        name="email"
        label="Email"
        leftIconName="mail-outline"
        placeholder="miguel@gestoque.com.br"
      />

      <AppInput
        control={control}
        name="password"
        label="Senha"
        placeholder="********"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[200px]">
        <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-forward">
          Login
        </AppButton>

        <View className="items-start gap-4">
          <Text className="text-sm text-center text-gray-500">
            Don't have an account?
          </Text>
          <AppButton
            onPress={() => navigate.navigate("Register")}
            mode="outline"
            iconName="arrow-forward"
          >
            Register
          </AppButton>
        </View>
      </View>
    </>
  );
};
