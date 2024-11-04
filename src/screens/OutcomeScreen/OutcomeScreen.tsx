import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/RootNavigator';
import { ResultRow } from '../../components/ResultRow';

type Props = {
  route: RouteProp<RootStackParamList, 'Outcome'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Outcome'>;
};

export const OutcomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const { calculationResults } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Daily</Text>
          <ResultRow label="Revenue" value={calculationResults.dailyRevenueUSD} isUSD />
          <ResultRow label="Cost" value={calculationResults.dailyCost} isUSD />
          <ResultRow label="Profit" value={calculationResults.dailyProfitUSD} isUSD />
          <ResultRow label="BTC Mined" value={calculationResults.dailyRevenueBTC} isBTC />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Monthly</Text>
          <ResultRow label="Revenue" value={calculationResults.monthlyRevenueUSD} isUSD />
          <ResultRow label="Cost" value={calculationResults.monthlyCost} isUSD />
          <ResultRow label="Profit" value={calculationResults.monthlyProfitUSD} isUSD />
          <ResultRow label="BTC Mined" value={calculationResults.monthlyRevenueBTC} isBTC />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Yearly</Text>
          <ResultRow label="Revenue" value={calculationResults.yearlyRevenueUSD} isUSD />
          <ResultRow label="Cost" value={calculationResults.yearlyCost} isUSD />
          <ResultRow label="Profit" value={calculationResults.yearlyProfitUSD} isUSD />
          <ResultRow label="BTC Mined" value={calculationResults.yearlyRevenueBTC} isBTC />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <ResultRow 
            label="Break-even Timeline" 
            value={calculationResults.breakevenTimeline}
          />
          <ResultRow 
            label="Cost to Mine 1 BTC" 
            value={calculationResults.costToMine} 
            isUSD 
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Calculate Again</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
  },
  resultValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});