import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";

const FeatureScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={[{ marginTop: 24, marginStart: 16 }, styles.h1]}>
          Halo {"Features"}
        </Text>
        <Text style={[{ marginTop: 8, marginStart: 16 }, styles.body1]}>
          Feature Built with React Native
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FeatureScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },


  h1: {
    color: "#333333",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  body1: {
    color: "#333333",
    fontSize: 16,
    fontFamily: "lato_regular",
  },


});
