
import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../theme";

export const styles = StyleSheet.create({  
    container: {
        paddingVertical: 16,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 16,
    },
    content:{
        flex: 1,
        gap: 7,
    },
    name:{
        fontFamily: fontFamily.bold,
        fontSize: 14,
        color: colors.black,
    },
    status:{
        fontFamily: fontFamily.regular,
        fontSize: 12,
        color: colors.gray[500],
    }
});