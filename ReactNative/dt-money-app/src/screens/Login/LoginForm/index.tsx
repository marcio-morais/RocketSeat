import { AppInput } from "@/components/AppImput";
import { useForm } from "react-hook-form";
import { View } from "react-native";

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
    <View>
      <AppInput
        control={control}
        name="email"
        label="Email"
        placeholder="miguel@gestoque.com.br"
        leftIconName="email"
      />
    </View>
  );
};
