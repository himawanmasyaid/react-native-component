import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("boarding")}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/ic_react.png")}
        />
      </Pressable>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
