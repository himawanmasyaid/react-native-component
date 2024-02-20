import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "screen/login/LoginScreen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import SplashScreen from "screen/splash/SplashScreen";
import RootNavigator from "navigation/RootNavigator";

const RootStack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    lato_regular: require("./assets/fonts/lato_regular.ttf"),
    lato_bold: require("./assets/fonts/lato_bold.ttf"),
    lato_black: require("./assets/fonts/lato_black.ttf"),
  });
  
  const [setIsLoading] = useState(true);
  
  useEffect(() => {
    if (fontsLoaded) {
      // setIsLoading(false);
    }
  }, [fontsLoaded]);

  return (
      <RootNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
