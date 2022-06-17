import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestuarant = {
  name: "Farmhouse Kicthen Thai Cuisine",
  image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
  price: "₹₹",
  reviews: "1500",
  ratings: 4.5,
  categories: [
    { title: "Thai" },
    { title: "Chinese" },
    { title: "Comfort Food" },
  ],
};

export default function About(props) {
  const { name, image, price, reviews, ratings, categories } =
    props.route.params;
  const formateCategories = categories?.map((cat) => cat.title).join(" • ");
  const desc = `${formateCategories} • ${
    price ? " • " + price : "  "
  } • 💵 • ${ratings} ⭐ (${reviews}+)`;
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: "#eee",
        marginBottom: 15,
      }}
    >
      <RestuarantImage image={image} />
      <RestuarantTitle name={name} />
      <RestuarantDesc desc={desc} />
    </View>
  );
}

const RestuarantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestuarantTitle = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 29,
      fontWeight: "600",
    }}
  >
    {props.name}
  </Text>
);

const RestuarantDesc = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 15.5,
      fontWeight: "400",
      marginBottom: 12,
    }}
  >
    {props.desc}
  </Text>
);
