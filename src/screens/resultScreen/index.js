import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Share, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";

const ResultScreen = ({ route, navigation }) => {
  const { score } = route.params;
  const shareScore = async (score) => {
    try {
      await Share.share({
        message: `You got this score: ${score}`,
      });
    } catch (error) {
      alert("There was an error sharing the score.");
    }
  };

  const takeToNewQuiz = () => {
    navigation.pop();
    navigation.push("QuizScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Quiz Result</Text>
      <View style={styles.quizResultContainer}>
        <Image source={require("../../../assets/trophy.png")} style={styles.trophyImage} />
      </View>
      <Text style={styles.congratulationsText}>Congratulations!</Text>
      <Text style={styles.subheading}>You have completed the quiz successfully.</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your Score</Text>
      </View>
      <View>
        <Text style={styles.scoreValue}>{score} / 10</Text>
      </View>
      <View>
        <Text style={styles.coinsText}>Coins Earned </Text>
      </View>

      <View style={styles.coinsContainer}>
        <Image source={require("../../../assets/gold-coins.png")} style={styles.coinsImage} />
        <Text style={styles.coins}>{score * 10}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton title="Share Result" type="flattered" width={45} icon="md-share" onPress={() => shareScore(score)} />
        <CustomButton title="Take New Quiz" type="primary" width={45} onPress={takeToNewQuiz} />
      </View>
      <TouchableOpacity
        style={styles.crossIcon}
        onPress={() => {
          navigation.pop();
          navigation.push("QuizScreen");
        }}
      >
        <Text style={styles.crossText}>X</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181B37",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 40,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 18,
    color: "#AFAFAF",
    marginBottom: 20,
  },
  quizResultContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  trophyImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 40,
  },
  congratulationsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 10,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#AFAFAF",
  },
  scoreValue: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
  },
  coinsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#AFAFAF",
    marginTop: 30,
  },
  coinsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinsImage: {
    width: 35,
    height: 35,
    marginRight: 5,
  },
  coins: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 50,
    paddingBottom: 50,
    backgroundColor: "#181B37",
  },
  crossIcon: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#545457",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  crossText: {
    fontSize: 16,
    color: "white",
  },
});

export default ResultScreen;
