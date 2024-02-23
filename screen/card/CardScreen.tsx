import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const CardScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          {/* Horizontal Card */}

          <Text style={[styles.body1, { marginBottom: 16, marginTop: 16 }]}>
            Horizontal Card Sample
          </Text>

          <View style={{flexDirection:"row"}}>
            <View style={[stylesProduct.container, stylesProduct.shadow]}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../../assets/images/ic_react.png")}
              />
              <Text style={[styles.body1, { marginTop: 12, marginBottom: 16 }]}>
                React Native
              </Text>
            </View>
            <View style={[stylesProduct.container, stylesProduct.shadow]}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../../assets/images/ic_react.png")}
              />
              <Text style={[styles.body1, { marginTop: 12, marginBottom: 16 }]}>
                React Native
              </Text>
            </View>
          </View>

          {/* Basic Card Screen */}

          <Text style={[styles.body1, { marginBottom: 16, marginTop: 16 }]}>
            Basic Card Screen
          </Text>

          <View style={styles.card_filled}>
            <Text style={styles.body1}>Card Filled</Text>
          </View>

          {/* Basic Card Shadow Elevated */}
          <View style={[styles.card_shadow_elevated, styles.card_shadow]}>
            <Text style={styles.body1}>Card Shadow Elevated</Text>
          </View>

          {/* Basic Card Screen */}
          <View style={styles.card_outlined}>
            <Text style={styles.body1}>Card Outlined</Text>
          </View>

          <Text style={[styles.body1, { marginBottom: 16, marginTop: 16 }]}>
            Grid Card
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardScreen;

const stylesProduct = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: "center",
  },

  shadow: {
    maxWidth: 150,
    width: 150,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 16,
  },

  card_filled: {
    backgroundColor: "#E0E0E0",
    minHeight: 100,
    padding: 20,
    marginVertical: 6,
    borderRadius: 12,
  },

  card_shadow_elevated: {
    backgroundColor: "#FFD05B",
    minHeight: 100,
    padding: 20,
    marginVertical: 12,
    borderRadius: 12,
  },

  card_shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  card_outlined: {
    backgroundColor: "#fff",
    minHeight: 100,
    padding: 20,
    marginVertical: 6,
    borderRadius: 12,
    borderColor: "#D3D3D3",
    borderWidth: 1,
  },

  body1: {
    color: "#333333",
    fontSize: 16,
    fontFamily: "lato_bold",
  },
});
