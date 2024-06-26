import React, { useEffect, useState } from "react";
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

const SplashScreen = () => {
// const SplashScreen = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  })


  if (loading) {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../../assets/images/ic_react.png')}
        />
      </View>
    );
  } else {
    navigation.navigate('main');
    return null;
  }

  // return (
  //   <View style={styles.container}>
  //     <Pressable onPress={() => navigation.navigate('main')}>
  //       <Image
  //         style={{ width: 100, height: 100 }}
  //         source={require("../../assets/images/ic_react.png")}
  //       />
  //     </Pressable>
  //   </View>
  // );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center", // horizontal
    justifyContent: "center", // vertical
  },
});
