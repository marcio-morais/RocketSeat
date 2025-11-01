import { Text, View } from "react-native"

export const Home = () => {
    return (
        <View className="flex-1 bg-background-primary justify-center items-center">
            <Text className="text-white text-2xl font-bold">Home Screen</Text>
            <Text className="text-gray-500 text-base mt-4">DT Money App</Text>            
        </View>
        
    )
}