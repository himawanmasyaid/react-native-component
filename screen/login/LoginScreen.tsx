import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  Button,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

const LoginScreen = ({navigation} : NativeStackScreenProps<RootStackParamList>) => {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.9,
            backgroundColor: "#fff",
            paddingStart: 16,
            paddingEnd: 16,
          }}
        >
          <View style={{ marginTop: 100 }}></View>

          <Text style={styles.h1}>Selamat Datang</Text>
          <Text
            style={[{ marginTop: 20 }, styles.body1]} // 2 style dalam 1 style
          >
            Silahkan masuk kembali ke akun anda:
          </Text>

          <Text style={[{ marginTop: 24, marginBottom: 6 }, styles.body2]}>
            Email
          </Text>

          <TextInput
            style={styles.inputOutline}
            onChangeText={onChangeText}
            placeholder="Masukkan Email..."
          />

          <Text style={[{ marginTop: 24, marginBottom: 6 }, styles.body2]}>
            Password
          </Text>

          <TextInput
            style={styles.inputBoxRounded}
            onChangeText={onChangeText}
            placeholder="Masukkan Password..."
          />
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('home', {
                name: "Himawan",
              })
            }
          >
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFBF6",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bottom: {
    flex: 0.1,
    marginStart: 16,
    marginEnd: 16,
  },

  button: {
    height: 50,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#841584",
    justifyContent: "center", // center vertical
    alignItems: "center", // center horizontal
  },

  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Lato",
  },

  inputOutline: {
    height: 50,
    paddingStart: 16,
    paddingEnd: 16,
    borderWidth: 1,
    fontFamily: "lato_regular",
    borderRadius: 8,
    borderColor: "#D3D3D3",
    backgroundColor: "#fff",
    fontSize: 14,
  },

  inputBoxRounded: {
    height: 50,
    paddingStart: 16,
    paddingEnd: 16,
    fontFamily: "lato_regular",
    borderRadius: 8,
    backgroundColor: "#F8F8F8",
    fontSize: 14,
  },

  h1: {
    color: "#333333",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  h2: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  body1: {
    color: "#333333",
    fontSize: 16,
    fontFamily: "lato_regular",
  },

  body2: {
    color: "#333333",
    fontSize: 14,
    fontFamily: "lato_regular",
  },

  body3: {
    color: "#333333",
    fontSize: 12,
    fontFamily: "lato_regular",
  },

  body4: {
    color: "#333333",
    fontSize: 10,
    fontFamily: "lato_regular",
  },
});
