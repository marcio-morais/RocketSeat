
import { DismissKeyboardView } from "@/components/DissmissKeyboardView";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>();

  return (
    <DismissKeyboardView >
      <View className="flex-1 w-[82%] self-center">
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
