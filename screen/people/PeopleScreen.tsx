import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";
import React, { Component, useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";

const PeopleScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const [peoples, setPeople] = useState([]);

  useEffect(() => {
    // setup rest api for get people
    const getPeoples = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        // .then((json) => console.log(json)); // log response data
        .then((json) => setPeople(json)) // set response data to set people
        .catch((error) => {marginHori
          // error handler
          console.log("rest api error : ", error);
        });
    };

    {
      // fetch rest api get people
    }
    getPeoples();
  }, []);

  const peopleItemView = ({ item }) => {
    return (
      <View
        style={[
          { flexDirection: "row", justifyContent: "space-between" },
          styles.item,
        ]}
      >
        <View style={{ flex: 1, marginVertical: 6 }}>
          <Text style={styles.sub2}>{item.name}</Text>
          <Text style={styles.body1}>{item.company.name}</Text>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", }}>
          <Image
            style={{ width: 24, height: 24, marginEnd: 6, marginTop: 4}}
            source={require("../../assets/images/ic_phone_outline.png")}
          />
          <Image
            style={{ width: 24, height: 24, marginEnd: 6,  }}
            source={require("../../assets/images/ic_email_outline.png")}
          />
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/images/ic_whatsapp.png")}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1, marginTop: 18 }}
        data={peoples}
        renderItem={peopleItemView}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default PeopleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  item: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    marginVertical: 6,
    marginStart: 16,
    marginEnd: 16,
    borderRadius: 12,
  },

  sub2: {
    color: "#333333",
    fontSize: 16,
    fontFamily: "lato_bold",
  },

  sub3: {
    color: "#333333",
    fontSize: 14,
    fontFamily: "lato_bold",
  },

  body1: {
    color: "#333333",
    fontSize: 16,
    fontFamily: "lato_regular",
  },

  body2: {
    color: "#333333",
    fontSize: 12,
    fontFamily: "lato_regular",
  },
});
