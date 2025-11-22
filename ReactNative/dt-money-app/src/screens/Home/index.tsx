import { useAuthContext } from "@/context/auth.context";
import { Text, TouchableOpacity, View } from "react-native";

export const Home = () => {
    const { handleLogout } = useAuthContext(); 

    return (
        <View className="flex-1 bg-background-primary justify-center items-center">
            <Text className="text-white text-2xl font-bold">Home Screen</Text>
            <Text className="text-gray-500 text-base mt-4">DT Money App</Text>            

            <TouchableOpacity onPress={handleLogout} className="mt-10 bg-red-600 px-4 py-2 rounded">
                <Text className="text-white text-base font-semibold">Logout</Text>
            </TouchableOpacity>
        </View>
        
    )
}