// components/StyledButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
  disabled?: boolean;
}

export const StyledButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.buttonSecondary,
        disabled && styles.buttonDisabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          variant === 'secondary' && styles.buttonTextSecondary,
          disabled && styles.buttonTextDisabled,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFB800', // Brighter yellow that complements the brown
    padding: 16,
    borderRadius: 12,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#3A3420', // Darker variant for secondary actions
    borderWidth: 1,
    borderColor: '#494222',
  },
  buttonDisabled: {
    backgroundColor: '#494222',
    opacity: 0.7,
  },
  buttonText: {
    color: '#231f10', // Dark brown text for contrast
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextSecondary: {
    color: '#cbc090', // Light color for secondary button
  },
  buttonTextDisabled: {
    color: '#cbc090',
  },
});