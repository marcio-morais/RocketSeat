import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../../theme';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  editButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
  removeButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
};

export function PageHeader({
  title,
  subtitle,
  editButton,
  removeButton,
}: PageHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={{ position: 'absolute', top: 40, right: 24, flexDirection: 'row', gap: 16 }}>
        {editButton && (
          <TouchableOpacity
            onPress={editButton.onPress}
          >
            <MaterialIcons
              name={editButton.icon}
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
        )}

        {removeButton && (
          <TouchableOpacity
            onPress={removeButton.onPress}
          >
            <MaterialIcons
              name={removeButton.icon}
              size={24}
              color={colors.red[500]}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
