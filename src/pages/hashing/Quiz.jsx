import React from "react";
import Questions from "../../components/Questions";
import { useParams } from "react-router-dom";

function HashingQuiz() {
  const { id } = useParams();
  const fileType = id === "1" ? "pre" : "post";

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Hashing Theory {fileType === "pre" ? "Pre" : "Post"}-Quiz
      </h1>
      <Questions
        quizType="hashing"
        fileType={fileType}
      />
    </div>
  );
}

export default HashingQuiz;
