import React from "react";
import "./quiz.css";
// components
import SingleQuestion from "./SingleQuestion";

import preQuizData from "../quiz_data/pre_data.json"; // Import the local data
import postQuizData from "../quiz_data/post_data.json"; // Import the local data
function Questions({ quizType, fileType }) {
  // questions returned from Trivia API
  const [questions, setQuestions] = React.useState([]);
  // mapping each question & its answers
  const [questionsAndAnswers, setQuestionsAndAnswers] = React.useState([]);
  // show warning if not all questions are answered
  const [showWarning, setShowWarning] = React.useState(false);
  // number of correct answers
  const [numCorrectAnswers, setNumCorrectAnswers] = React.useState(0);
  // show result
  const [showResult, setShowResult] = React.useState(false);

  React.useEffect(() => {
    if (questions.length === 0) {
      const quiz =
        fileType === "pre"
          ? preQuizData.quizzes.find((q) => q.quiz_type === quizType)
          : postQuizData.quizzes.find((q) => q.quiz_type === quizType);
      if (quiz) {
        const randomQuestions = getRandomQuestions(quiz.questions, 5);
        setQuestions(randomQuestions);
        setQuestionsAndAnswers(
          randomQuestions.map((questionObject) => ({
            question: questionObject.question,
            shuffledAnswers: shuffle([
              ...questionObject.incorrect_answers,
              questionObject.correct_answer,
            ]),
            correctAnswer: questionObject.correct_answer,
            selectedAnswer: "",
          }))
        );
      }
    }
  }, [questions, quizType, fileType]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // choosing an answer
  function updateAnswer(currentQuestion, answer) {
    setQuestionsAndAnswers(
      questionsAndAnswers.map((questionObject) => {
        // if it is the question being answered, update its selected answer
        return questionObject.question === currentQuestion
          ? { ...questionObject, selectedAnswer: answer }
          : questionObject;
      })
    );
  }

  // clicking "check answers"
  function checkAnswers() {
    // find if some questions are not answered //

    // case 1: missing answers
    const notAllAnswered = questionsAndAnswers.some(
      (questionObject) => questionObject.selectedAnswer === ""
    );

    setShowWarning(notAllAnswered);

    // case 2: all questions have been answered
    if (!notAllAnswered) {
      questionsAndAnswers.forEach((questionObject) => {
        // compare selected answer & correct answer
        if (questionObject.selectedAnswer === questionObject.correctAnswer) {
          setNumCorrectAnswers(
            (prevNumCorrectAnswers) => prevNumCorrectAnswers + 1
          );
        }
      });

      // show result
      setShowResult(true);
    }
  }

  // play again
  function playAgain() {
    // reset state
    setQuestions([]);
    setQuestionsAndAnswers([]);
    setShowResult(false);
    setNumCorrectAnswers(0);
  }

  // questions elements
  const questionsElements = questionsAndAnswers.map((questionObject, index) => {
    return (
      <SingleQuestion
        key={index}
        question={questionObject.question}
        allAnswers={questionObject.shuffledAnswers}
        selectedAnswer={questionObject.selectedAnswer}
        correctAnswer={questionObject.correctAnswer}
        showResult={showResult}
        updateAnswer={updateAnswer}
      />
    );
  });

  // Function to get random questions
  function getRandomQuestions(allQuestions, count) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <div>
      <h2 className="quiz_quiz-type-heading">
        {quizType.charAt(0).toUpperCase() + quizType.slice(1)} Quiz
      </h2>
      <div className="quiz_questions-container">{questionsElements}</div>

      <div className="quiz_text-center">
        {showWarning && (
          <p className="quiz_warning-message">
            There are questions not answered yet
          </p>
        )}

        {questions.length > 0 && !showResult ? (
          <button
            className="quiz_check-btn"
            onClick={checkAnswers}
          >
            Check answers
          </button>
        ) : null}
      </div>

      {showResult && (
        <div className="quiz_result-container">
          <p className="quiz_result-message">
            You scored {numCorrectAnswers}/5 correct answers
          </p>
          <button
            className="quiz_play-again-btn"
            onClick={playAgain}
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}

export default Questions;
