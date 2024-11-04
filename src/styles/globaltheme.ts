import { StyleSheet } from "react-native";

export const theme = {
    colors: {
      background: '#231f10',      // Main background
      input: '#494222',           // Input background
      inputPlaceholder: '#cbc090', // Input placeholder text
      text: '#FFFFFF',            // White text
      secondary: '#cbc090',       // Secondary text (labels, etc)
    }
};


// Global styles that can be shared across screens
export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#231f10',
    },
    header: {
      backgroundColor: '#231f10',
      padding: 16,
      paddingBottom: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: 48,
    },
    inputContainer: {
      maxWidth: 480,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    label: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 8,
    },
    input: {
      backgroundColor: '#494222',
      color: '#FFFFFF',
      borderRadius: 12,
      padding: 16,
      height: 56,
      fontSize: 16,
      fontWeight: 'normal',
    },
    inputPlaceholder: {
      color: '#cbc090',
    },
    button: {
        backgroundColor: '#FFB800', // Brighter yellow that complements the brown
        padding: 14,
        borderRadius: 12,
        minWidth: 120,
        alignItems: 'center',
        justifyContent: 'center',
      },
    buttonText: {
      color: '#231f10',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});
  