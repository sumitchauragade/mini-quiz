import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomButton = ({ title, type, icon, onPress, width }) => {
  return (
    <TouchableOpacity style={[styles.buttonBase, styles[type], width ? { width: `${width}%` } : {}]} onPress={onPress}>
      {icon && <Ionicons name={icon} size={20} style={[styles.icon, styles[`${type}Icon`]]} />}
      <Text style={[styles.textBase, styles[`${type}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
    alignSelf: "center", // Centers the button if its container doesn't have 'alignItems: center'
  },
  primary: {
    backgroundColor: "#4FC3F7",
  },
  secondary: {
    backgroundColor: "white",
  },
  flattered: {},
  textBase: {
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "black",
  },
  flatteredText: {
    color: "#FFFFFF",
  },
  icon: {
    marginRight: 5,
  },
  primaryIcon: {
    color: "white",
  },
  secondaryIcon: {
    color: "black",
  },
  flatteredIcon: {
    color: "#FFFFFF",
  },
});

export default CustomButton;
