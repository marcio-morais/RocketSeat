import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "50%",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
    gap: 5
  },
  header: {
    flexDirection: "row",
    alignItems: "center", 
    gap: 5,    
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  value: {
    fontSize: 12,
    fontFamily: fontFamily.bold,    
    color: colors.black,
  },
});
