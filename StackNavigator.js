import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const user = true;
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name={"Home"} component={HomeScreen} />
          <Stack.Screen name={"Restaurant"} component={RestaurantScreen} />
        </>
      ) : (
        <Stack.Screen name={"Login"} component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
