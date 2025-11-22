import { useSnackBarContext } from "@/context/snackbar.context";
import { colors } from "@/shared/colors";
import { Text, View } from "react-native";


export const SnackBar = () => {
  const { message, type } = useSnackBarContext();

    if (!message || !type) {
      return null;
    }

  const bgColor =
    type === "success"
      ? colors["accent-brand-background-primary"]
      : type === "error"
        ? colors["accent-red-background-primary"]
        : colors["accent-blue-dark"];

  return (
    <View
      className={`absolute bottom-10 self-center w-[90%] h-[50px] justify-center rounded-xl ${bgColor} z-10 p-2`}
    >
      <Text className="text-white text-base font-bold">{message}</Text>
    </View>
  );
};
