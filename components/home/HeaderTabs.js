import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native-web";

export default function HeaderTabs({ activeState, setActiveState }) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButtons
        text="Delivery"
        bgColor="black"
        textColor="white"
        activeState={activeState}
        setActiveState={setActiveState}
      />
      <HeaderButtons
        text="Pickup"
        bgColor="white"
        textColor="black"
        activeState={activeState}
        setActiveState={setActiveState}
      />
    </View>
  );
}
const HeaderButtons = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeState == props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveState(props.text)}
  >
    <Text
      style={{
        color: props.activeState == props.text ? "white" : "black",
        fontWeight: "900",
        fontSize: 15,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
