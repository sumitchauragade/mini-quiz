import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import ProgressBar from "../../components/ProgressBar";
import OptionBox from "../../components/OptionBox";
import CustomButton from "../../components/CustomButton";
import { useQuiz } from "../../hooks/useQuiz";
import { useNavigation } from "@react-navigation/native";

const HeaderComponent = ({ questions, questionNumber, totalQuestions, setCurrentQuestionIndex, currentQuestionIndex }) => (
  <View style={styles.header}>
    <Text style={styles.subheading}>Mathematics Quiz</Text>
    <Text style={styles.heading}>
      Question {questionNumber}/{totalQuestions}
    </Text>
    <ProgressBar total={totalQuestions} questions={questions} onDashClick={setCurrentQuestionIndex} currentQuestionIndex={currentQuestionIndex} />
  </View>
);

const ContentComponent = ({ question, options, selectedOption, onSelectOption }) => (
  <View style={styles.questionConatiner}>
    <Text style={styles.questionDetails}>{question?.question}</Text>
    <FlatList
      data={options}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <OptionBox
          value={item}
          currentState={selectedOption === item ? (item === question.correct_answer ? "correct" : "incorrect") : null}
          onSelect={() => onSelectOption(item)}
          isDisabled={!!selectedOption}
        />
      )}
      style={styles.FlatListcontent}
    />
  </View>
);

const LoadingComponent = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF", // or any other suitable color or design preference
    }}
  >
    <ActivityIndicator size="large" color="#000" />
  </View>
);

const FooterComponent = ({ onNext, isLastQuestion, score }) => {
  const navigation = useNavigation();
  const handleOnSubmit = () => {
    navigation.navigate("ResultScreen", { score: score });
  };
  return (
    <View style={styles.buttonContainer}>
      <CustomButton title="Quit Quiz" type="flattered" width={49} icon="md-exit" onPress={() => alert("Quit Quiz")} />
      {isLastQuestion ? (
        <CustomButton title="Submit" type="primary" width={49} onPress={handleOnSubmit} />
      ) : (
        <CustomButton title="Next" type="primary" width={49} onPress={onNext} />
      )}
    </View>
  );
};

const QuizeScreen = () => {
  const {
    questions,
    currentQuestion,
    handleOptionSelect,
    currentQuestionIndex,
    selectedOption,
    handleNext,
    setSelectedOption,
    error,
    getScore,
    isLoading,
    setCurrentQuestionIndex,
  } = useQuiz();

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const navigation = useNavigation();

  const options = currentQuestion?.options || [];

  if (isLoading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        questions={questions}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        currentQuestionIndex={currentQuestionIndex}
      />
      <ContentComponent question={currentQuestion} options={options} selectedOption={selectedOption} onSelectOption={handleOptionSelect} />
      <FooterComponent onNext={handleNext} isLastQuestion={isLastQuestion} score={getScore()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181B37",
  },
  questionConatiner: {
    flex: 1,
    marginTop: 30,
  },
  questionDetails: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  FlatListcontent: {
    marginTop: 20,
  },
  header: {
    marginLeft: 20,
  },
  heading: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 15,
  },
  subheading: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginVertical: 10,
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: "5%", // Optional: Adjusts side padding
  },
  quitButton: {
    padding: 10, // Optional: for a better touch area
    color: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  nextButton: {
    position: "absolute",
    right: 10,
    bottom: 10,
    padding: 10,
    backgroundColor: "white",
  },
});

export default QuizeScreen;
