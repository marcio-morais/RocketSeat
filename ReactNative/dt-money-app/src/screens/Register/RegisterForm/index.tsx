import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppImput";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { yupResolver } from '@hookform/resolvers/yup';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { registerFormSchema } from "./schema";

export interface RegisterFormParms {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const navigate = useNavigation<NavigationProp<PublicStackParamsList>>();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegisterFormParms>(
    {
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      resolver: yupResolver(registerFormSchema),
    }
  );

  const onSubmit = (data: RegisterFormParms) => {
    console.log(data);
  };

  return (
    <View className="flex-1 justify-between mt-8 items-stretch min-h-screen">
      <AppInput
        control={control}
        name="name"
        label="Name"
        leftIconName="person"
        placeholder="fulano"
      />
      <AppInput
        control={control}
        name="email"
        label="Email"
        leftIconName="mail-outline"
        placeholder="fulano@gestoque.com.br"
      />
      <AppInput
        control={control}
        name="password"
        label="Password"
        leftIconName="lock-outline"
        placeholder="********"
        secureTextEntry
      />
      <AppInput
        control={control}
        name="confirmPassword"
        label="Password Confirm"
        leftIconName="lock-outline"
        placeholder="********"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-10 min-h-[200px]">
        <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-forward">Salvar</AppButton>

        <View className="items-start gap-4">         
          <AppButton
            onPress={() => navigate.navigate("Login")}
            mode="outline"
            iconName="arrow-back"
          >
            Fazer login
          </AppButton>
        </View>
      </View>
    </View>
  );
};
