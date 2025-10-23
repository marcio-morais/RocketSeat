import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  option: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 7,     
    padding: 12,
  },
  title: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[400],
  }
});


