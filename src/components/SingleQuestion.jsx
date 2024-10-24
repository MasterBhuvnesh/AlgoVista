// to decode html entities
import { decode } from "html-entities";
import "./quiz.css";

function SingleQuestion(props) {
  // clicking an answer
  function clickAnswer(answer, currentQuestion) {
    // call updateAnswer prop
    props.updateAnswer(currentQuestion, answer);
  }

  // answers elements
  const answersElements = props.allAnswers.map((answer, index) => {
    return (
      // correct class: when answer = correct answer
      // incorrect class: when answer = user selected answer & it's incorrect answer
      // dimmed class: all answers except correct answer
      <button
        key={index}
        onClick={() => clickAnswer(answer, props.question)}
        className={`quiz_answer-btn ${
          answer === props.selectedAnswer ? "selected" : ""
        }
        ${props.showResult && answer === props.correctAnswer ? "correct" : ""}
        ${
          props.showResult &&
          answer === props.selectedAnswer &&
          answer !== props.correctAnswer
            ? "incorrect"
            : ""
        }
        ${props.showResult && answer !== props.correctAnswer ? "dimmed" : ""}
        `}
        disabled={props.showResult}
      >
        {decode(answer)}
      </button>
    );
  });

  return (
    <div className="quiz_question-container">
      <h1 className="quiz_question">{decode(props.question)}</h1>
      <div className="quiz_answers-btn-container">{answersElements}</div>
    </div>
  );
}

export default SingleQuestion;
