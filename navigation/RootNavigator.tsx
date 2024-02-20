import React from 'react'
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'screen/splash/SplashScreen';
import LoginScreen from 'screen/login/LoginScreen';
import HomeScreen from 'screen/home/HomeScreen';


const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="splash">
        <RootStack.Screen name="splash" component={SplashScreen} options={ {headerShown: false} } />
        <RootStack.Screen name="login" component={LoginScreen} options={ {headerShown: false} } />
        <RootStack.Screen name="home" component={HomeScreen} options={ {headerShown: false} } />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;