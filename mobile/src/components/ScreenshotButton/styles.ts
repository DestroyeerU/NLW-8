import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',

    alignItems: 'center',
    justifyContent: 'center',

    width: 40,
    height: 40,

    marginRight: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary
  },
  image: {
    width: 40,
    height: 40,
  },
  removeIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  }
});
