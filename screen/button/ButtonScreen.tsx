import { RootStackParamList } from "navigation/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ButtonScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {/* Filled Button */}
        <Text style={styles.textHeader}>Filled Button</Text>
        <TouchableOpacity
          style={styles.filledButton}
          // onPress={() =>
          //   navigation.navigate("home", {
          //     name: "Himawan",
          //   })
          // }
        >
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>

        {/* Outlined Button */}
        <Text style={styles.textHeader}>Outlined Button</Text>
        <TouchableOpacity
          style={styles.outlineButton}
          // onPress={() =>
          //   navigation.navigate("home", {
          //     name: "Himawan",
          //   })
          // }
        >
          <Text style={[styles.textButton, { color: "#841584" }]}>Submit</Text>
        </TouchableOpacity>

        {/* Floating Button */}
        <Text style={styles.textHeader}>Floating Button</Text>
        {/* Floating Text */}
        <View style={{ flexDirection: "row", alignContent: "flex-start" }}>
          <TouchableOpacity
            style={[styles.shadow, styles.floatingButton]}
            onPress={() => {
              alert("FLoating Text is pressed");
            }}
          >
            <Text style={styles.textButtonFloating}>ALERT</Text>
          </TouchableOpacity>
          {/* Floating Image */}
          <TouchableOpacity
            style={[
              styles.shadow,
              styles.floatingButton,
              {
                backgroundColor: "#26A6D5",
              },
            ]}
            onPress={() => {
              alert("Floating Image is pressed");
            }}
          >
            <Image
              style={{ width: 34, height: 34 }}
              source={require("../../assets/images/ic_play_white.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 16,
    flexDirection: "column", // vertical
  },

  textHeader: {
    marginTop: 24,
    marginBottom: 8,
    color: "#333333",
    fontSize: 14,
    fontFamily: "lato_regular",
  },

  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "lato_regular",
  },

  textButtonFloating: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "lato_bold",
  },

  filledButton: {
    height: 50,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: "#841584",
    justifyContent: "center", // center vertical
    alignItems: "center", // center horizontal
    elevation: 20,
  },

  outlineButton: {
    height: 50,
    marginBottom: 10,
    borderRadius: 6,
    borderColor: "#841584",
    borderWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // center vertical
    alignItems: "center", // center horizontal
  },

  floatingButton: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#841584",
    borderRadius: 100,
    marginEnd: 20,
  },

  shadow: {
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOpacity: 0.4,
    elevation: 4,
    shadowOffset: { width: 0, height: 4 },
  },
});
