
import { AuthHeader } from "@/components/AuthHeader";
import { DismissKeyboardView } from "@/components/DissmissKeyboardView";
import { View } from "react-native";
import { LoginForm } from "./LoginForm";
import { useAuthContext } from "@/context/auth.context";

export const Login = () => {

  const { user, token, handleAuthenticate, handleRegister, handleLogout } = useAuthContext();

  return (
    <DismissKeyboardView >
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
