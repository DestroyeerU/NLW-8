import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24
  },
  header: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingRight: 24
  },
  titleText: {
    color: theme.colors.text_primary,
    fontSize: 20,
    fontFamily: theme.fonts.medium
  },
  input: {
    height: 112,
    padding: 8,
    marginBottom: 8,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,

    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 16
  }
});
