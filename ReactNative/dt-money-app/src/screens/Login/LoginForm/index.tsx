import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppImput";
import { useAuthContext } from "@/context/auth.context";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { AppError } from "@/shared/helpers/AppError";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Text, View } from "react-native";
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
      email: "marcin_bk@yahoo.com.br",
      password: "Mrcnbk@2985",
    },
    resolver: yupResolver(loginFormSchema),
  });

  const { handleAuthenticate } = useAuthContext();
  const { handleError } = useErrorHandler();

  const onSubmit = async (userData: FormLoginParms) => {
    try {
      await handleAuthenticate(userData);
    } catch (error) {
      if (error instanceof AppError) {
        handleError(error, "Unable to login. Please check your credentials.");
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
          {
            isSubmitting ? <ActivityIndicator color="white" />  : "Login"
          }
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
