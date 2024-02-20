import React from "react";
import { NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";

const SplashScreen = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('login')}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../assets/images/ic_react.png")}
        />
      </Pressable>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
