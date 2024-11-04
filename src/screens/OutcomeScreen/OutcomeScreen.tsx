import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/RootNavigator';
import { ResultRow } from '../../components/ResultRow';
import { styles } from './style';
import { globalStyles } from '../../styles/globaltheme';
import { CustomHeader } from '../../components/navigation/Header';
import SafeAreaView from "react-native-safe-area-view";

type Props = {
  route: RouteProp<RootStackParamList, 'Outcome'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Outcome'>;
};

export const OutcomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const { calculationResults } = route.params;

  return (
    <SafeAreaView style={globalStyles.container}>
      <CustomHeader title="Outcome" />
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
          style={globalStyles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.buttonText}>Calculate Again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
