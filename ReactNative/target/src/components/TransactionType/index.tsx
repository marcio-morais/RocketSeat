import { View } from "react-native";
import { colors } from "../../theme";

import { TransactionTypes } from "../../utils/TransactionTypes";
import { TransactionTypeOption } from "./option";
import { styles } from "./style";

type Props = {
    selected: TransactionTypes;
    onChange: (type: TransactionTypes) => void;  
};

export function TransactionType({ selected, onChange }: Props) {
    return (
        <View style={styles.container}>
            <TransactionTypeOption
                title="Entrada"
                icon="arrow-upward"
                isSelected={selected === TransactionTypes.Input}
                selectedColor={colors.blue[500]}
                onPress={() => onChange(TransactionTypes.Input)}
            />
            <TransactionTypeOption
                title="Saída"
                icon="arrow-downward"
                isSelected={selected === TransactionTypes.Output}
                selectedColor={colors.red[400]}
                onPress={() => onChange(TransactionTypes.Output)}
            />
        </View>
    )
}   