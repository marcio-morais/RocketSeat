import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 72
  },
  title: {        
    marginTop: 24,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    fontSize: 18,
    fontFamily: fontFamily.medium,
    color: colors.black,
    paddingBottom: 8,
    paddingHorizontal: 16
  },
  emptyMessage: {
    fontSize: 14,
    color: colors.gray[600],    
    fontFamily: fontFamily.regular,
    marginTop: 24
  }
});
