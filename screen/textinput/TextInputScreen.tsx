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
} from "react-native";

const TextInputScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  {
    /* State : digunakan untuk menyimpan data input sementara
      set digunakan untuk menyimpan data di variable state
    */
  }
  const [defaultInput, setDefaultInput] = React.useState("");
  const [fullname, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isHiddenPassword, setHiddenPassword] = React.useState(true); // state boolean

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {/* Text Input Default */}
          <Text style={styles.headerInput}>Default Input</Text>
          <TextInput
            style={styles.inputOutline}
            placeholder="Masukkan Default Input..."
            value={defaultInput}
            onChangeText={(value) => setDefaultInput(value)}
          />

          {/* Text Input Full Name */}
          <Text style={styles.headerInput}>Nama Lengkap</Text>
          <TextInput
            style={styles.inputOutline}
            placeholder="Masukkan Nama Lengkap..."
            value={fullname}
            onChangeText={(value) => setFullName(value)}
            inputMode="text"
          />

          {/* Text Input Number */}
          <Text style={styles.headerInput}>Nomor Telephone</Text>
          <TextInput
            style={styles.inputOutline}
            placeholder="Masukkan Nomor Telephone..."
            value={phoneNumber}
            onChangeText={(value) => setPhoneNumber(value)}
            inputMode="tel"
          />

          {/* Text Input Password */}
          <Text style={styles.headerInput}>Password</Text>
          <View style={{ justifyContent: "center" }}>
            <TextInput
              style={styles.inputOutline}
              placeholder="Masukkan Password..."
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={isHiddenPassword}
            />
            <TouchableOpacity
              onPress={() => setHiddenPassword(!isHiddenPassword)}
            >
              <Text
                style={[
                  styles.textShow,
                  {
                    position: "absolute",
                    right: 16,
                    bottom: 12,
                    justifyContent: "center",
                  },
                ]}
              >
                {isHiddenPassword ? "Show" : "Hide"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Text Input Address */}
          <Text style={styles.headerInput}>Alamat</Text>
          <TextInput
            style={styles.inputMultpipleOutline}
            placeholder="Masukkan Alamat..."
            value={address}
            onChangeText={(value) => setAddress(value)}
            inputMode="numeric"
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("home", {
                name: "Himawan",
              })
            }
          >
            <Text style={styles.textButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 16,
    flexDirection: "column", // vertical
    justifyContent: "space-between", // horizontal
  },

  headerInput: {
    marginTop: 24,
    marginBottom: 6,
    color: "#333333",
    fontSize: 14,
    fontFamily: "lato_regular",
  },

  textShow: {
    color: "#737373",
    fontSize: 12,
    fontFamily: "lato_regular",
  },

  inputOutline: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 16,
    paddingEnd: 16,
    borderWidth: 1,
    fontFamily: "lato_regular",
    borderRadius: 8,
    borderColor: "#D3D3D3",
    backgroundColor: "#fff",
    fontSize: 14,
  },

  inputMultpipleOutline: {
    minHeight: 60,
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    fontFamily: "lato_regular",
    borderRadius: 8,
    borderColor: "#D3D3D3",
    backgroundColor: "#fff",
    fontSize: 14,
    textAlignVertical: "top",
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
    fontFamily: "lato_regular",
  },
});

export default TextInputScreen;
