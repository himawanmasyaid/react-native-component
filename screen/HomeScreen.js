// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={styles.customContainer}>
      <Text style={textStyle.titleText}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="light" />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#fff",
          borderRadius: 16,
        }}
      ></View>

      {/* Navigation Bottom Bar */}

      <View
        style={{
          height: 50,
          flexDirection: "row",
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={textStyle.titleBottomBar}
            onPress={() => navigation.navigate(`screen/HomeScreen`)}
          >
            Home
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={textStyle.titleBottomBar}>Favorite</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={textStyle.titleBottomBar}>Profile</Text>
        </View>
      </View>
    </View>
  );
}