import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { colors } from "../../theme";
import { styles } from "./style";

export type TargetProps = {
    id?: string;
    name: string;
    percentage: string;
    current: string;
    target: string;
}

type Props = TouchableOpacityProps & {
    data: TargetProps;
}

export function Target({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.content}>
                <Text style={styles.name}>
                    {data.name}
                </Text>
                <Text style={styles.status}>
                    {data.percentage} ∙ {data.current} de {data.target}
                </Text>
            </View>

            <MaterialIcons
                name="chevron-right"
                color={colors.gray[300]}
                size={24}
            />
        </TouchableOpacity>
    )
}
 