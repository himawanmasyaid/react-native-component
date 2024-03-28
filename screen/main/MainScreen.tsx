import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "screen/home/HomeScreen";
import { TextInput } from "react-native";
import TextInputScreen from "screen/textinput/TextInputScreen";
import FeatureScreen from "screen/features/FeatureScreen";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MainScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Components"
        component={HomeScreen}
        options={{
            headerShown:false,
          }}
      />
      <Tab.Screen
        name="Features"
        component={FeatureScreen}
        options={{
          headerShown:false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
