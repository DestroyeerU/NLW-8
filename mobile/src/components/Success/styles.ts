import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  text: {
    marginBottom: 24,

    fontSize: 20,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 40,
    marginBottom: 56,
    paddingHorizontal: 24,

    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary
  },
  buttonText: {
    fontSize: 14,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
});
