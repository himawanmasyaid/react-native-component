import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PeopleModel } from "data/PeopleModel";
import { RootStackParamList } from "navigation/RootStackParamList";
import React, { Component, useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const PeopleScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {

  const [isLoading, setLoading] = useState(true);
  const [peoplesJson, setPeopleJson] = useState([]); // hasilnya menyimpan data json, merupakan cara paling simple
  const [peoples, setPeople] = useState<PeopleModel[]>([]); // menggunakan model agar lebih terstruktur, dan gampang di maintenance


  // simple way
  // useEffect(() => {
  //   // setup rest api for get people
  //   const getPeoples = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       // .then((json) => console.log(json)); // log response data
  //       .then((json) =>
  //         setPeopleJson(json)) // set response data to set people
  //       .catch((error) => {
  //         // error handler
  //         console.log("rest api error : ", error);
  //       });
  //   };

  //   {
  //     // fetch rest api get people
  //   }
  //   getPeoples();
  // }, []);


  // best way
  const getPeoplesWithProps = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      console.log(json)
      setPeople(json.people);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    getPeoplesWithProps()

  }, [])

  const peopleItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={ () => {
        navigation.navigate('people_detail', item)
      }}>
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
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 24, height: 24, marginEnd: 6 }}
              source={require("../../assets/images/ic_phone_outline.png")}
            />
            <Image
              style={{ width: 24, height: 24, marginEnd: 6 }}
              source={require("../../assets/images/ic_email_outline.png")}
            />
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/images/ic_whatsapp.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
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
