import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/LoginScreen";
import SplashScreen from "./screen/SplashScreen";
import HomeScreen from "./screen/HomeScreen";
import DetailScreen from "./screen/DetailScreen";
import BoardingScreen from "./screen/BoardingScreen";
import { useFonts } from 'expo-font';
import React, { useState, useEffect } from 'react';

const Stack= createNativeStackNavigator();

export default function App() {

  const [setIsLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    'lato_regular': require('./assets/fonts/lato_regular.ttf'),
    'lato_bold': require('./assets/fonts/lato_bold.ttf'),
    'lato_black': require('./assets/fonts/lato_black.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // setIsLoading(false);
    }
  }, [fontsLoaded]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={LoginScreen} options={ {headerShown: false} } />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="detail" component={DetailScreen} />
        <Stack.Screen name="boarding" component={BoardingScreen} options={ {headerShown: false} }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
});