import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface CustomHeaderProps {
  title: string;
  showBack?: boolean;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBack = title === 'Outcome',
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        {showBack && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>{title}</Text>
        {/* Empty View for spacing when back button is hidden */}
        {showBack ? <View style={styles.placeholder} /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#231f10',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#494222',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    color: '#cbc090',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 40, // Same width as back button for balance
  },
  backArrow: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#cbc090',
  },
});
