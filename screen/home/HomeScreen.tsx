import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreenRouteProps, RootStackParamList } from "navigation/RootStackParamList";

const HomeScreen = ({navigation} : NativeStackScreenProps<RootStackParamList>) => {

    const route = useRoute<HomeScreenRouteProps>()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
            <Text>
                {route.params.name}
            </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
