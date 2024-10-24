import React from "react";

const HashingOverview = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-500 text-center">
        Prerequisites and Module Overview
      </h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-2xl font-bold mb-3 text-blue-500">
            Prerequisites:
          </h3>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Basic Understanding of Arrays and Lists: Familiarity with these fundamental data structures is essential.",
              "Introduction to Matrices: Knowledge of how to work with matrices, which are essentially two-dimensional arrays.",
              "Curiosity to Learn and Explore: A strong desire to delve into and understand data structures is highly encouraged!",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start"
              >
                <svg
                  className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-3 text-blue-500">
            Module Overview:
          </h3>
          <p className="mb-3 text-base text-gray-700">
            This module on data structures provides an in-depth exploration of
            various data structures. It includes:
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Lectures: Comprehensive lessons covering the theory and concepts of data structures, including arrays, lists, and matrices.",
              "Hands-On Practice Exercises: Practical activities designed to reinforce your understanding and application of the concepts.",
              "Quizzes for Self-Assessment: Interactive quizzes to evaluate your progress and solidify your knowledge.",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start"
              >
                <svg
                  className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-base text-gray-700 bg-blue-100 p-4 rounded-lg">
          Throughout this module, you will gain valuable skills and insights
          into the effective use of arrays, lists, and matrices, preparing you
          for more advanced topics in data structures and algorithms.
        </p>
      </div>
    </div>
  );
};

export default HashingOverview;
