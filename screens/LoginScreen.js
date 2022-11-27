import { View, Text } from "react-native";
import React from "react";
import useAuth from "../customHooks/useAuth";

const LoginScreen = () => {
  const { user } = useAuth();
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
