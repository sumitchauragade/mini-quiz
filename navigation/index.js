import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PreAuthStackScreen } from "./rootnavigation";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <PreAuthStackScreen />
    </NavigationContainer>
  );
};
