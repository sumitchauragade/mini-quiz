// Create a custom hook for the quiz logic
import { useGetQuestionsQuery } from "../../store/api";
import { useEffect, useState } from "react";

export const useQuiz = () => {
  const { data, error, isLoading } = useGetQuestionsQuery({ amount: 10, category: 9, difficulty: "easy", type: "multiple" });
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (data && data.results.length > 0) {
      const enhancedData = data.results.map((question) => {
        // Shuffle the options for each question
        let options = shuffleOptions([...question.incorrect_answers, question.correct_answer]);
        return { ...question, is_answered_correctly: null, options };
      });
      setQuestions(enhancedData);
    }
  }, [data]);

  useEffect(() => {
    if (currentQuestion) {
      setSelectedOption(currentQuestion.selected_answer || null);
    }
  }, [currentQuestionIndex]);

  const shuffleOptions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleOptionSelect = (selectedOption) => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    currentQuestion.is_answered_correctly = selectedOption === currentQuestion.correct_answer;
    currentQuestion.selected_answer = selectedOption; // Store the selected answer
    setQuestions(updatedQuestions);
    setSelectedOption(selectedOption);
  };

  const getScore = () => {
    const correctAnswers = questions.filter((question) => question.is_answered_correctly === true);
    return correctAnswers.length;
  };

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    selectedOption,
    handleNext,
    setSelectedOption,
    handleOptionSelect,
    error,
    getScore,
    isLoading,
  };
};
