import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768; // iPad width threshold

export const theme = {
  colors: {
    background: '#231f10',
    input: '#494222',
    inputPlaceholder: '#cbc090',
    text: '#FFFFFF',
    secondary: '#cbc090',
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231f10',
  },
  header: {
    backgroundColor: '#231f10',
    padding: isTablet ? 24 : 16,
    paddingBottom: isTablet ? 16 : 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: isTablet ? 24 : 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: isTablet ? 64 : 48,
  },
  inputContainer: {
    maxWidth: isTablet ? 600 : 480,
    paddingHorizontal: isTablet ? 24 : 16,
    paddingVertical: isTablet ? 16 : 12,
    alignSelf: 'center',
    width: '100%',
  },
  label: {
    color: '#FFFFFF',
    fontSize: isTablet ? 18 : 16,
    fontWeight: '500',
    marginBottom: isTablet ? 12 : 8,
  },
  input: {
    backgroundColor: '#494222',
    color: '#FFFFFF',
    borderRadius: 12,
    padding: isTablet ? 20 : 16,
    height: isTablet ? 64 : 56,
    fontSize: isTablet ? 18 : 16,
    fontWeight: 'normal',
  },
  inputPlaceholder: {
    color: '#cbc090',
  },
  button: {
    backgroundColor: '#FFB800',
    padding: isTablet ? 18 : 14,
    borderRadius: 12,
    minWidth: isTablet ? 200 : 120,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: isTablet ? '50%' : '90%',
    marginTop: isTablet ? 32 : 24,
  },
  buttonText: {
    color: '#231f10',
    fontSize: isTablet ? 18 : 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingBottom: isTablet ? 40 : 24,
  },
});
