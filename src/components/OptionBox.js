import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OptionBox = ({ value, currentState, onSelect, defaultState = null, isDisabled = false }) => {
  let borderColor = "white";
  let textColor = "white";
  let logo = null;

  const stateToUse = currentState || defaultState;

  switch (stateToUse) {
    case "correct":
      borderColor = "green";
      textColor = "green";
      logo = "✅";
      break;
    case "incorrect":
      borderColor = "red";
      textColor = "red";
      logo = "❌";
      break;
  }

  return (
    <TouchableOpacity style={[styles.optionBox, { borderColor: borderColor }]} onPress={onSelect} disabled={isDisabled}>
      <Text style={{ color: textColor }}>{value}</Text>
      {logo && <Text style={{ color: textColor }}>{logo}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
});

export default OptionBox;
