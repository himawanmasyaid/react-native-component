import React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const TextScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={ [styles.h1, { marginTop: 20 } ]}>Header 1</Text>
        <Text style={styles.h2}>Header 2</Text>
        <Text style={styles.h3}>Header 3</Text>
        <Text style={styles.h4}>Header 4</Text>

        {/* Sub Header */}
        <Text style={ [styles.sub1, { marginTop: 20 }]}>Sub Header 1</Text>
        <Text style={styles.sub2}>Sub Header 2</Text>
        <Text style={styles.sub3}>Sub Header 3</Text>

        {/* Paragraph */}
        <Text style={[styles.paragraph1, { marginTop: 20 } ]}>Paragraph 1</Text>
        <Text style={styles.paragraph2}>Paragraph 2</Text>
        <Text style={styles.paragraph3}>Paragraph 3</Text>
        <Text style={styles.paragraph4}>Paragraph 4</Text>
        <Text style={styles.paragraph5}>Paragraph 4</Text>
      </View>
    </SafeAreaView>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 16,
  },

  h1: {
    color: "#333333",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  h2: {
    color: "#333333",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  h3: {
    color: "#333333",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  h4: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  sub1: {
    color: "#333333",
    fontSize: 24,
    fontFamily: "lato_bold",
  },

  sub2: {
    color: "#333333",
    fontSize: 20,
    fontFamily: "lato_bold",
  },

  sub3: {
    color: "#333333",
    fontSize: 18,
    fontFamily: "lato_bold",
  },

  paragraph1: {
    color: "#333333",
    fontSize: 18,
    fontFamily: "lato_regular",
  },

  paragraph2: {
    color: "#333333",
    fontSize: 16,
    fontFamily: "lato_regular",
  },

  paragraph3: {
    color: "#333333",
    fontSize: 14,
    fontFamily: "lato_regular",
  },
  paragraph4: {
    color: "#333333",
    fontSize: 12,
    fontFamily: "lato_regular",
  },
  paragraph5: {
    color: "#333333",
    fontSize: 10,
    fontFamily: "lato_regular",
  },
});
