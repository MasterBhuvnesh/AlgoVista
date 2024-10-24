import React from "react";

const SearchingAim = () => {
  const aimItems = [
    "Understand the Concept of Searching: Students will be able to explain the principles of linear and binary search, their differences, and their importance in computer science, particularly in data retrieval.",
    "Apply Searching Techniques: Students will demonstrate the ability to implement linear and binary search algorithms, and recognize when each is applicable based on the nature of the data.",
    "Analyze Search Efficiency: Students will evaluate the efficiency of linear and binary search algorithms in terms of time complexity and space complexity, and understand how to optimize them for different data sets and use cases.",
    "Understand Real-world Applications: Students will recognize and explain real-world applications of linear and binary search algorithms, such as in database queries, file searching, and algorithmic problem-solving in software development.",
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg font-poppins max-w-5xl mx-auto my-8">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-500 text-center">
        Searching Fundamentals
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

export default SearchingAim;
