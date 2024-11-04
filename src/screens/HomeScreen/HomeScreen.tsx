import React, { useState } from "react";
import {  View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert} from "react-native";
import { styles } from "./style";
import { theme, globalStyles } from "../../styles/globaltheme";
import { Api } from "../../services/api/Api";
import SafeAreaView from "react-native-safe-area-view";
import { useNavigationApp } from "../../hooks/useNavigation";
import { CustomHeader } from "../../components/navigation/Header";


export const HomeScreen = () => {

    const { navigationApp } = useNavigationApp();
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
      hash_rate: '',
      power_consumption: '',
      electricity_cost: '',
      initial_investment: '',
    });
    const [errors, setErrors] = useState({
      hash_rate: '',
      power_consumption: '',
      electricity_cost: '',
      initial_investment: '',
    });

    
  
    const validateInputs = () => {
      let isValid = true;
      const newErrors = {
        hash_rate: '',
        power_consumption: '',
        electricity_cost: '',
        initial_investment: '',
      };

      if (!inputs.hash_rate || isNaN(Number(inputs.hash_rate))) {
        newErrors.hash_rate = 'Please enter a valid hash rate';
        isValid = false;
      }

      if (!inputs.power_consumption || isNaN(Number(inputs.power_consumption))) {
        newErrors.power_consumption = 'Please enter a valid power consumption';
        isValid = false;
      }

      if (!inputs.electricity_cost || isNaN(Number(inputs.electricity_cost))) {
        newErrors.electricity_cost = 'Please enter a valid electricity cost';
        isValid = false;
      }

      if (!inputs.initial_investment || isNaN(Number(inputs.initial_investment))) {
        newErrors.initial_investment = 'Please enter a valid initial investment';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };
  
    const handleCalculate = async () => {
      console.log('handleCalculate');
      if (!validateInputs()) return;

      setLoading(true);
      try {
        const result = await Api.calculateMining({
          hash_rate: parseFloat(inputs.hash_rate),
          power_consumption: parseFloat(inputs.power_consumption),
          electricity_cost: parseFloat(inputs.electricity_cost),
          initial_investment: parseFloat(inputs.initial_investment),
        });
        
        navigationApp.navigate('Outcome', { calculationResults: result });
      } catch (error:any) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <SafeAreaView   style={globalStyles.container}>
        <CustomHeader title="Calculator" />
        <View style={styles.content}>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Hash Rate (TH/s)</Text>
            <TextInput
          style={globalStyles.input}
              placeholderTextColor={theme.colors.inputPlaceholder}
              keyboardType="numeric"
              placeholder="Enter hashrate"
              onChangeText={(text) => setInputs({ ...inputs, hash_rate: text })}
            />
            {errors.hash_rate ? (
              <Text style={styles.errorText}>{errors.hash_rate}</Text>
            ) : null}
          </View>
  
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Power Consumption (W)</Text>
            <TextInput
              style={globalStyles.input}
              placeholderTextColor={theme.colors.inputPlaceholder}
              keyboardType="numeric"
              placeholder="Enter power consumption"
              onChangeText={(text) => setInputs({ ...inputs, power_consumption: text })}
            />
            {errors.power_consumption ? (
              <Text style={styles.errorText}>{errors.power_consumption}</Text>
            ) : null}
          </View>
  
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Electricity Cost ($/kWh)</Text>
            <TextInput
              style={globalStyles.input}
              placeholderTextColor={theme.colors.inputPlaceholder}
              keyboardType="numeric"
              placeholder="Enter electricity cost"
              onChangeText={(text) => setInputs({ ...inputs, electricity_cost: text })}
            />
            {errors.electricity_cost ? (
              <Text style={styles.errorText}>{errors.electricity_cost}</Text>
            ) : null}
          </View>
  
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Initial Investment ($)</Text>
            <TextInput
              style={globalStyles.input}
              placeholderTextColor={theme.colors.inputPlaceholder}
              keyboardType="numeric"
              placeholder="Enter initial investment"
              onChangeText={(text) => setInputs({ ...inputs, initial_investment: text })}
            />
            {errors.initial_investment ? (
              <Text style={styles.errorText}>{errors.initial_investment}</Text>
            ) : null}
          </View>
  
          <TouchableOpacity 
            style={globalStyles.button}
            onPress={handleCalculate}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
            <Text style={globalStyles.buttonText}>Calculate</Text>
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

