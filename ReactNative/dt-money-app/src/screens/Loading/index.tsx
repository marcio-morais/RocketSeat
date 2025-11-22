import { useAuthContext } from "@/context/auth.context";
import { colors } from "@/shared/colors";
import { useEffect } from "react";
import { ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoadingProps {
    setLoading: (value: boolean) => void;
}

export const Loading: React.FC<LoadingProps> = ({ setLoading }) => {
  const { restoreUserSession, handleLogout } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const user = await restoreUserSession();
        
        if (!user) {
          await handleLogout();
        }
      } catch (error) {
        await handleLogout();
      }
      finally {        
        setLoading(false);       
      }
    })();
  }, [restoreUserSession, handleLogout]);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background-primary">
      <>
        <Image className="h-[48px] w-[255px]"
        source={require("@/assets/Logo.png")} />
        <ActivityIndicator color={colors.white} className="mt-20" />
      </>
    </SafeAreaView>
  );
};
