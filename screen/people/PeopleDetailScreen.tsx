import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";

const PeopleDetailScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>

      </View>
    </SafeAreaView>
  );
};

export default PeopleDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  sub2: {
    color: "#333333",
    fontSize: 16,
    fontFamily: "lato_bold",
  },

  body3: {
    color: "#333333",
    fontSize: 10,
    fontFamily: "lato_regular",
  },
});
