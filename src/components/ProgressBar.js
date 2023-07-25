import React, { useCallback, useMemo } from "react";
import { View, StyleSheet, Pressable } from "react-native";

const ProgressBar = ({ total, questions, onDashClick, currentQuestionIndex }) => {
  const colors = {
    green: "#4CAF50",
    red: "#F44336",
    white: "#E0E0E0",
    grey: "#9E9E9E",
  };

  const sequence = useMemo(() => {
    return questions.map((q, index) => {
      if (index === currentQuestionIndex) return { [`question${index + 1}`]: "white" };
      if (q.is_answered_correctly === true) return { [`question${index + 1}`]: "green" };
      if (q.is_answered_correctly === false) return { [`question${index + 1}`]: "red" };
      if (q.is_answered_correctly === null) return { [`question${index + 1}`]: "grey" };
      return { [`question${index + 1}`]: "white" };
    });
  }, [questions, currentQuestionIndex]);

  const getDashColor = useCallback(
    (index) => {
      const colorKey = Object.values(sequence[index])[0];
      return colors[colorKey];
    },
    [sequence, colors]
  );

  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <Pressable
          key={index}
          onPress={() => onDashClick(index)}
          style={({ pressed }) => [
            styles.dash,
            {
              flex: 1,
              backgroundColor: pressed ? "#BDBDBD" : getDashColor(index),
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: 10,
  },
  dash: {
    height: 4,
    margin: 0.5,
  },
});

export default ProgressBar;
