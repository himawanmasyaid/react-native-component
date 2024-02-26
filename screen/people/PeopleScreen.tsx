import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStackParamList";
import React, { Component, useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

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
        .catch((error) => {
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
      <View style={styles.item}>
        <Text style={styles.sub3}>{item.name}</Text>
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

  sub3: {
    color: "#333333",
    fontSize: 14,
    fontFamily: "lato_bold",
  },

});
