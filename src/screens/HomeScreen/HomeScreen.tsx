import React, { useState } from "react";
import {  View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert} from "react-native";
import { styles } from "./style";
import { Api } from "../../services/api/Api";
import { useNavigationApp } from "../../hooks/useNavigation";


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
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Hash Rate (TH/s)</Text>
            <TextInput
              style={styles.input}
              value={inputs.hash_rate}
              onChangeText={(text) => setInputs(prev => ({ ...prev, hash_rate: text }))}
              keyboardType="numeric"
              placeholder="Enter hash rate"
            />
            {errors.hash_rate ? (
              <Text style={styles.errorText}>{errors.hash_rate}</Text>
            ) : null}
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Power Consumption (W)</Text>
            <TextInput
              style={styles.input}
              value={inputs.power_consumption}
              onChangeText={(text) => setInputs(prev => ({ ...prev, power_consumption: text }))}
              keyboardType="numeric"
              placeholder="Enter power consumption"
            />
            {errors.power_consumption ? (
              <Text style={styles.errorText}>{errors.power_consumption}</Text>
            ) : null}
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Electricity Cost ($/kWh)</Text>
            <TextInput
              style={styles.input}
              value={inputs.electricity_cost}
              onChangeText={(text) => setInputs(prev => ({ ...prev, electricity_cost: text }))}
              keyboardType="numeric"
              placeholder="Enter electricity cost"
            />
            {errors.electricity_cost ? (
              <Text style={styles.errorText}>{errors.electricity_cost}</Text>
            ) : null}
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Initial Investment ($)</Text>
            <TextInput
              style={styles.input}
              value={inputs.initial_investment}
              onChangeText={(text) => setInputs(prev => ({ ...prev, initial_investment: text }))}
              keyboardType="numeric"
              placeholder="Enter initial investment"
            />
            {errors.initial_investment ? (
              <Text style={styles.errorText}>{errors.initial_investment}</Text>
            ) : null}
          </View>
  
          <TouchableOpacity 
            style={styles.button}
            onPress={handleCalculate}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Calculate</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

