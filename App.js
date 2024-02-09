import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SplashScreen = ({navigation}) => {

  // const navigation = useNavigart

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity 
        onPress={() => 
          navigation.navigate('home', {name: 'Jane'})
        }
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const HomepageScreen = ({navigation, route}) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity>
        <Text>Hello {route.params.name}, Back to Splash</Text>
      </TouchableOpacity>
    </View>
  );

}

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="home" component={HomepageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  customContainer: {
    flex: 1,
    backgroundColor: "#1b1b1d",
    alignItems: "flex-start", // horizontal
    justifyContent: "center", // vertical
  },

  statusBar: {},
});

const textStyle = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginStart: 16,
    marginEnd: 16,
    marginBottom: 16,
  },
  titleBottomBar: {
    fontSize: 14,
    color: "#24acf2",
  },
});
