import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

export const styles = StyleSheet.create({
  content: {
    padding: isTablet ? 32 : 20,
    maxWidth: isTablet ? 700 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#231f10',
    borderRadius: isTablet ? 12 : 8,
    padding: isTablet ? 24 : 16,
    marginBottom: isTablet ? 28 : 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  sectionTitle: {
    fontSize: isTablet ? 22 : 18,
    fontWeight: 'bold',
    marginBottom: isTablet ? 16 : 12,
    color: '#cbc090',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: isTablet ? 12 : 8,
    borderBottomWidth: 1,
    borderBottomColor: '#494222',
  },
  resultLabel: {
    fontSize: isTablet ? 18 : 16,
    color: '#cbc090',
  },
  resultValue: {
    fontSize: isTablet ? 18 : 16,
    fontWeight: '600',
    color: '#cbc090',
  }
});
