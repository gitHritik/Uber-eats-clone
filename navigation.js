import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import RestuarantDetail from "./screens/RestuarantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderComplete from "./screens/OrderComplete";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screeOptions = {
    headerShow: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screeOptions={screeOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestuarantDetail" component={RestuarantDetail} />
          <Stack.Screen name="OrderComplete" component={OrderComplete} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
