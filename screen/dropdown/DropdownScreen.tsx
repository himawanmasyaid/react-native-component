import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { RootStackParamList } from "navigation/RootStackParamList";
import { Dropdown } from "react-native-element-dropdown";

const DropdownScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  {
    // state
  }
  const [education, setEducation] = React.useState("");
  const [gender, setGender] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.body2}>Education</Text>

          <Dropdown
            data={educationsList}
            style={styles.dropdown}
            search
            labelField={"label"}
            valueField={"id"}
            maxHeight={300}
            placeholder={'Select Education'}
            fontFamily="lato_regular"
            onChange={(item) => {
              setEducation(item.label);
            }}
          />

          <Text style={styles.body2}>Gender</Text>


          <Dropdown
            data={genderList}
            style={styles.dropdown}
            labelField={"label"}
            valueField={"id"}
            maxHeight={300}
            placeholder={'Select Gender'}
            fontFamily="lato_regular"
            onChange={(item) => {
              setGender(item.label);
            }}
          />

        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
                {         
                    console.log("education : " + [education])
                    console.log("gender : " + [gender])
                        
                    if (education.length === 0 ) {
                        alert("Please Select Education");
                    } else if (gender.length === 0) {
                        alert("Please Select Gender");
                    } else {
                        console.log("education : " + [education])
                        console.log("gender : " + [gender])
                    } 

                }
            }
          >
            <Text style={styles.textButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DropdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 16,
    flexDirection: "column", // vertical
    justifyContent: "space-between", // horizontal
  },

  body2: {
    marginTop: 24,
    marginBottom: 6,
    color: "#333333",
    fontSize: 14,
    fontFamily: "lato_regular",
  },

  button: {
    height: 50,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#006837",
    justifyContent: "center", // center vertical
    alignItems: "center", // center horizontal
  },

  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "lato_regular",
  },

  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
    paddingStart: 16,
    paddingEnd: 16,
  },
});

const educationsList = [
  {
    id: "1",
    label: "SD",
  },
  {
    id: "2",
    label: "SMP",
  },
  {
    id: "3",
    label: "SMA",
  },
  {
    id: "4",
    label: "S1",
  },
  {
    id: "5",
    label: "S2",
  },
  {
    id: "6",
    label: "S3",
  },
];

const genderList = [
    {
      id: 1,
      label: "Male",
    },
    {
        id: 2,
        label: "Female",
      },
]
