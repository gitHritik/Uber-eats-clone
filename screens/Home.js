import { View, Text, PermissionsAndroid } from "react-native";
import React, { useEffect } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import { SafeAreaView, ScrollView } from "react-native-web";
import Categories from "../components/home/Categories";
// import { Divider } from "react-native-elements";
import RestuarantItems, {
  localRestuarants,
} from "../components/home/RestuarantItems";
import { useState } from "react";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY = "";

export default function Home({ navigation }) {
  const [restuarantData, setRestuarantData] = useState(localRestuarants);
  const [city, setcity] = useState("SanDiego");
  const [activeState, setActiveState] = useState("Delivery");

  const getRestauantsFromYelp = () => {
    // const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer Xxvy_Y1qWdlW3Bg5i7qjGgzpkX5pFz3LZC8YWPAGJQxK_JBqazEl3XoQ62aP2zYbZjfJqZj8OATUakFq8Gy4jlwhIwiDL_H_otr62ozQFqdlDTDhs-u8JrPfg3akYnYx`,
      },
    };

    return fetch(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`,
      apiOptions
    )
      .then((res) => res.json())
      .then((json) =>
        setRestuarantData(
          json.businesses.filter((business) =>
            business.transections.includes(activeState.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestauantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeState={activeState} setActiveState={setActiveState} />
        <SearchBar cityholder={setcity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestuarantItems
          restuarantData={restuarantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
