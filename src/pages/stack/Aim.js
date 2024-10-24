import React from "react";

const StackAim = () => {
  const aimItems = [
    "Understand the concept of stacks as a means for memory management and process execution.",
    "Learn to implement stacks for using them in backtracking algorithms.",
    "Learn the logic behind the navigation in web browsers. Ex. Back button",
    "Learning how stacks are commonly used in computer science and game development to keep track of the game state, particularly in scenarios where the order of operations or actions is important.",
    "Stacks are used in data structures for expression evaluation and conversion, parentheses checking, string reversal, syntax parsing, and memory management.",
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg font-poppins max-w-5xl mx-auto my-8">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-500 text-center">
        Stack Fundamentals
      </h2>
      <ul className="space-y-4 text-lg text-gray-700">
        {aimItems.map((item, index) => (
          <li
            key={index}
            className="flex items-start"
          >
            <svg
              className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0 mt-1"
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
    </div>
  );
};

export default StackAim;
