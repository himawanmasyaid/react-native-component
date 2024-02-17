import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/LoginScreen";
import SplashScreen from "./screen/SplashScreen";
import HomeScreen from "./screen/HomeScreen";
import DetailScreen from "./screen/DetailScreen";
import BoardingScreen from "./screen/BoardingScreen";
import NavigationItem from "./navigation/NavigationItem";

// const SplashScreen = ({navigation}) => {

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity 
//         onPress={() => 
//           navigation.navigate('home', {name: 'Jane'})
//         }
//       >
//         <Text>Go to Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const HomepageScreen = ({navigation, route}) => {

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity>
//         <Text>Hello {route.params.name}, Back to Splash</Text>
//       </TouchableOpacity>
//     </View>
//   );

// }

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={SplashScreen} options={ {headerShown: false} } />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="detail" component={DetailScreen} />
        <Stack.Screen name="boarding" component={BoardingScreen} options={ {headerShown: false} }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
});