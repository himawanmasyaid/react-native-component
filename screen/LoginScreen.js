import React, { Component } from "react";
import { Text, StyleSheet, View, Touchable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
        <Text onPress={() => navigation.navigate("home", {name: "Himawan", role: "Android Engineer"})}>Go to Home</Text>
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1, alignItems: 'center', justifyContent: 'center'
    },
  });
