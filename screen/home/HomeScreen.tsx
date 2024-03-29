import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HomeScreenRouteProps,
  RootStackParamList,
} from "navigation/RootStackParamList";

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const route = useRoute<HomeScreenRouteProps>();

  type ComponentProp = { title: string };

  const ComponentItem = ({ title }: ComponentProp) => (
    <View style={styles.item} >
      <Text style={styles.sub1}>{title}</Text>
      <Text style={ [ styles.body1, { marginTop: 8}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.sub2}>React Component</Text>
          <View
            style={{backgroundColor: "#3d4a36", borderRadius: 30 }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/images/ic_react.png")}
            />
          </View>
        </View>
        <Text style={[{ marginTop: 24, marginStart: 16 }, styles.h1]}>
          Halo {'Himawan'}
        </Text>
        <Text style={[{ marginTop: 8, marginStart: 16 }, styles.body1]}>
          Components Built with React Native
        </Text>
        <FlatList
          style={{ flex: 1, marginTop: 18 }}
          data={ComponentListData}
          renderItem={({ item }) =>
          <TouchableOpacity onPress={ () => 
            {
              if(typeof item.navigate === 'string' && item.navigate.length === 0) {
                alert("'data string is empty")
              } else {
                navigation.navigate(item.navigate)
              }
            }
          }>
            <ComponentItem title={item.title} />
          </TouchableOpacity>
          }
          keyExtractor={(item) => item.title}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#fff",
    flexDirection: "row", // horizontal | center
    justifyContent: "space-between", // horizontal
    alignItems: "center",
    height: 60,
    paddingStart: 16,
    paddingEnd: 16,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },

  item: {
    backgroundColor: "#f7fafd",
    flex: 1,
    padding: 20,
    marginVertical: 6,
    marginStart: 16,
    marginEnd: 16,
    borderRadius: 12,
  },

  h1: {
    color: "#333333",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  h2: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "lato_black",
  },

  sub1: {
    color: "#333333",
    fontSize: 20,
    fontFamily: "lato_bold",
  },

  sub2: {
    color: "#333333",
    fontSize: 18,
    fontFamily: "lato_bold",
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
});

const ComponentListData = [
  {
    title: "Text View",
    navigate: "text",
    icon: "",
  },
  {
    title: "Text Input",
    navigate: 'textinput',
    icon: "",
  },
  {
    title: "Button",
    navigate: "button",
    icon: "",
  },
  {
    title: "Card",
    navigate: "card",
    icon: "card",
  },
  {
    title: "Status Bar",
    navigate: "statusbar",
  },
  {
    title: "Dropdown Select Option ",
    navigate: "dropdown",
  },
  {
    title: "People Restfull Api",
    navigate: "people",
    icon: "",
  },
  {
    title: "Radio Button",
    navigate: "",
    icon: "",
  },
  {
    title: "Check Box",
    navigate: "",
    icon: "",
  },
  {
    title: "Carousel",
    navigate: "",
    icon: "",
  },
  {
    title: "Date Picker",
    navigate: "",
    icon: "",
  },
  {
    title: "Modal Dialog",
    navigate: "",
    icon: "",
  },
];
