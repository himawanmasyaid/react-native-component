import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({navigation, route}) => {

  const {name, role} = route.params

  return (
    <View style ={styles.container}>
    <TouchableOpacity>
      <Text>Hello {name}</Text>
      <Text>Role {role} Back to Splash</Text>
      <Text>Back to Splash</Text>
    </TouchableOpacity>
  </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
});