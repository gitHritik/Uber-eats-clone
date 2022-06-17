import { View, Text, Image } from "react-native";
import React, { cloneElement } from "react";
import { TouchableOpacity } from "react-native-web";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestuarants = [
  {
    name: "C Level Lounge",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/4QHMIkQgYCSv-QNYXbkBEQ/o.jpg",
    ratings: "4.5",
  },
  {
    name: "CUCINA urbana",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/0LLt3rg3HG-OQUCARlWTcw/o.jpg",
    ratings: "5",
  },
  {
    name: "Steamy Piggy",
    image:
      "https://s3-media4.fl.yelpcdn.com/bphoto/rE2Ti2kPJTW_xv2FkW-8Lg/o.jpg",
    ratings: "4",
  },
];

export default function RestuarantItems({ navigation, ...props }) {
  return (
    <>
      {props.restuarantData.map((resturants, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          key={index}
          onPress={() =>
            navigation.navigate("RestuarantDetail", {
              name: resturants.name,
              image: resturants.image,
              ratings: resturants.ratings,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestuarantImage image={resturants.image} />
            <RestuarantInfo
              name={resturants.name}
              ratings={resturants.ratings}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestuarantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestuarantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.ratings}</Text>
    </View>
  </View>
);
