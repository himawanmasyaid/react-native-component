import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("login")}>Go to Login</Text>
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, alignItems: 'center', justifyContent: 'center'
    },
  });