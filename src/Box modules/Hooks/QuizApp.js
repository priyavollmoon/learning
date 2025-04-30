import React, { useReducer, useEffect } from "react";

// 1. Initial state definition
const initialState = {
  currentQuestion: 0,
  score: 0,
  answers: [],
  timeLeft: 30,
  showResult: false,
};

// 2. Reducer function definition
function quizReducer(state, action) {
  switch (action.type) {
    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };

    case "SELECT_ANSWER":
      const isCorrect = action.payload === action.correctAnswer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        answers: [...state.answers, action.payload],
      };

    case "NEXT_QUESTION":
      const isLast = state.currentQuestion + 1 >= questions.length;
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        timeLeft: 30,
        showResult: isLast,
      };

    case "TIME_UP":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        timeLeft: 30,
      };

    case "RESTART":
      return initialState;

    default:
      return state;
  }
}

// 3. List of questions for the quiz
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
  },
  // Add more questions as needed
];

function QuizApp() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const current = questions[state.currentQuestion];

  // Timer logic with useEffect
  useEffect(() => {
    if (state.showResult) return;
    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    if (state.timeLeft <= 0) {
      dispatch({ type: "TIME_UP" });
    }

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [state.timeLeft, state.showResult]);

  // Handle the user selecting an answer
  const handleAnswer = (option) => {
    dispatch({ type: "SELECT_ANSWER", payload: option, correctAnswer: current.answer });
    setTimeout(() => {
      dispatch({ type: "NEXT_QUESTION" });
    }, 500);
  };

  return (
    <div>
      {state.showResult ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {state.score} / {questions.length}</p>
          <button onClick={() => dispatch({ type: "RESTART" })}>Restart</button>
        </div>
      ) : (
        <div>
          <h3>{current.question}</h3>
          <p>Time Left: {state.timeLeft}s</p>
          {current.options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt)}>{opt}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizApp;
