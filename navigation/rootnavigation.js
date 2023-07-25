import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultScreen from "../src/screens/resultScreen/index";
import QuizScreen from "../src/screens/quizScreen/index";
const PreAuthStack = createNativeStackNavigator();
export const PreAuthStackScreen = () => {
  return (
    <PreAuthStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
      }}
      initialRouteName={"QuizScreen"}
    >
      <PreAuthStack.Screen name="QuizScreen" component={QuizScreen} />
      <PreAuthStack.Screen name="ResultScreen" component={ResultScreen} />
    </PreAuthStack.Navigator>
  );
};
