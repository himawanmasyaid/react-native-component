import React from 'react'
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'screen/splash/SplashScreen';
import LoginScreen from 'screen/login/LoginScreen';
import HomeScreen from 'screen/home/HomeScreen';
import TextScreen from 'screen/text/TextScreen';
import TextInputScreen from 'screen/textinput/TextInputScreen';
import ButtonScreen from 'screen/button/ButtonScreen';
import CardScreen from 'screen/card/CardScreen';
import StatusBarScreen from 'screen/statusbar/StatusBarScreen';
import DropdownScreen from 'screen/dropdown/DropdownScreen';
import PeopleScreen from 'screen/people/PeopleScreen';
import PeopleDetailScreen from 'screen/people/PeopleDetailScreen';
import MainScreen from 'screen/main/MainScreen';
import FeatureScreen from 'screen/features/FeatureScreen';


const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="splash">
        <RootStack.Screen name="splash" component={SplashScreen} options={ {headerShown: false} } />
        <RootStack.Screen name="login" component={LoginScreen} options={ {headerShown: false} } />
        <RootStack.Screen name="main" component={MainScreen} options={ {headerShown: false} } />
        <RootStack.Screen name="home" component={HomeScreen} options={ {headerShown: false} } />
        <RootStack.Screen name="features" component={FeatureScreen} options={ {headerShown: false} } />
        <RootStack.Screen name="text" component={TextScreen} options={ {headerShown: true} } />
        <RootStack.Screen name="textinput" component={TextInputScreen} options={ {headerShown: true} } />
        <RootStack.Screen name="button" component={ButtonScreen} options={ {headerShown: true} } />
        <RootStack.Screen name="card" component={CardScreen} options={ {headerShown: true} } />
        <RootStack.Screen name="statusbar" component={StatusBarScreen} options={ {headerShown: true} } />
        <RootStack.Screen name="dropdown" component={DropdownScreen} options={ {headerShown: true} } />
        <RootStack.Screen name="people" component={PeopleScreen} options={ {headerShown: true} } />
        <RootStack.Screen name="people_detail" component={PeopleDetailScreen} options={ {headerShown: true} } />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;