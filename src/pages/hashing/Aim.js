import React from "react";

const HashingAim = () => {
  const aimItems = [
    "Understand the Concept of Hashing: Students will be able to explain the principles of hashing and its importance in computer science, particularly in data retrieval and storage.",
    "Apply Hashing Techniques: Students will demonstrate the ability to implement various hashing techniques and algorithms, such as linear probing and double hashing.",
    "Analyze Hashing Efficiency: Students will be able to evaluate the efficiency of different hashing algorithms in terms of time complexity and space complexity, and understand how to optimize them for specific use cases.",
    "Design Hash Functions: Students will learn to design their own hash functions and analyze their effectiveness in minimizing collisions.",
    "Solve Collision Issues: Students will be able to apply techniques like chaining, open addressing, or other methods to handle collisions in hash tables.",
    "Understand Real-world Applications: Students will recognize and explain real-world applications of hashing functions, such as in cryptography, database indexing, and data structures.",
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

export default HashingAim;
