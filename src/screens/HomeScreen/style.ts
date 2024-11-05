import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768; // iPad width threshold

export const styles = StyleSheet.create({
  content: {
    padding: isTablet ? 40 : 20,
    maxWidth: isTablet ? 600 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: isTablet ? 14 : 12,
    marginTop: 4,
  },
 
});
