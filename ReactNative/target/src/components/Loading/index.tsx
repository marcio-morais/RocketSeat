import { ActivityIndicator } from "react-native";

import { colors } from "../../theme/colors";
import { styles } from "./style";

export function Loading() {
  return (
    <ActivityIndicator 
      style={styles.container}      
      color={colors.blue[500]}
    />
  );
}