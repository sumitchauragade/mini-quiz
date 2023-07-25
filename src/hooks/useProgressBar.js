// useProgressBar.js
const useProgressBar = (total, currentQuestionIndex) => {
  const sequence = useMemo(() => {
    return Array.from({ length: total }, (_, i) => [i + 1, i < currentQuestionIndex ? "green" : i === currentQuestionIndex ? "red" : "white"]);
  }, [total, currentQuestionIndex]);

  return sequence;
};
