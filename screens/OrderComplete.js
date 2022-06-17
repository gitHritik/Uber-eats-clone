import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restuarantDetails/MenuItems";

export default function OrderComplete() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgoundColor: "white" }}>
      {/* green check */}
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text>
        Your order at {restaurantName} had been placed for {totalUSD}
      </Text>
      {/* menu items */}
      <MenuItems HidecheckBox={true} restaurantName={restaurantName} />
      {/* cooking animations */}
      <LottieView
        style={{ height: 200, alignSelf: "center" }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
      />
    </SafeAreaView>
  );
}
