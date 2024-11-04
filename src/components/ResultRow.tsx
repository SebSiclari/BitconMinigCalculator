import {View, Text} from 'react-native';
import {styles} from '../screens/OutcomeScreen/style';

interface ResultRowProps {
  label: string;
  value: number;
  isUSD?: boolean;
  isBTC?: boolean;
}

export const ResultRow = ({
  label,
  value,
  isUSD = false,
  isBTC = false,
}: ResultRowProps) => (
  <View style={styles.resultRow}>
    <Text style={styles.resultLabel}>{label}</Text>
    <Text style={styles.resultValue}>
      {isUSD ? '$' : ''}
      {value}
      {isBTC ? ' BTC' : ''}
    </Text>
  </View>
);
