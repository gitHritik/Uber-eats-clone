import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView, StyleSheet } from "react-native-web";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const foods = [
  {
    title: "Rajma Chawal",
    image:
      "https://eatmoreart.org/wp-content/uploads/2020/05/Rajma-Chawal-Indian-Curried-Kidney-Beans-Rice-IMG_1591-1-scaled.jpg",
    price: "$500",
    description:
      "This Rajma recipe is a lightly spiced, creamy and delicious Punjabi style curry made with protein rich kidney beans",
  },
  {
    title: "Dal Batti Churma",
    image:
      "https://en-media.thebetterindia.com/uploads/2016/11/dal-bati-churma-rtb.jpg",
    price: "$500",
    description:
      " Dal Baati Churma is the most popular dish of Rajasthani cuisine. This meal is an esteemed part of every Rajasthani household.",
  },
  {
    title: "Dhokla",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/khaman-dhokla-recipe-500x375.jpg",
    price: "$500",
    description:
      "Dhokla is a vegetarian culinary dish that is native to the Indian state of Gujarat and parts of adjacent states. It is a Maharashtrian delicacy.",
  },
  {
    title: "Wada Pav",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8olNiAnVPlLYkliS1LTTJS3_oQHya9G__Q&usqp=CAU",
    price: "$500",
    description:
      "Vada pav is a popular and delicious Maharashtrian street food of fried batter coated potato dumplings sandwiched in a pav ",
  },
];
const styles = StyleSheet.create({
  menuItemStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
export default function MenuItems({ restaurantName, HidecheckBox }) {
  const dispatch = useDispatch();
  const selectItems = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View
          key={index}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#eee",
            marginBottom: 15,
          }}
        >
          <View style={styles.menuItemStyles}>
            {HidecheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItems(food, checkboxValue)}
                isChecked={isFoodCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);
const FoodImage = (props) => (
  <Image
    source={{ uri: props.food.image }}
    style={{ width: 100, height: 100, borderRadius: 8 }}
  />
);
