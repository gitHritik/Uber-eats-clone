import { View, Text } from "react-native";
import React from "react";
import About from "../components/restuarantDetails/About";
import MenuItems from "../components/restuarantDetails/MenuItems";
import ViewCart from "../components/restuarantDetails/ViewCart";

export default function RestuarantDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
