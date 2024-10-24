import React from "react";

const LinkedlistAim = () => {
  const aimItems = [
    "Understand the concept of linked lists as a different list-like data structure, as compared to arrays.",
    "Learn to implement a simple linked list ADT (abstract data type) using a class or data structure that includes nodes and pointers.",
    "Learn the differences in the operations and time complexities between arrays and linked lists.",
    "Write code to manipulate and perform common operations on linked lists, such as insertion, deletion, traversal, etc.",
    "Understand and be able to draw node and pointer diagrams to represent linked list data structures.",
    "Linked lists are often covered as part of a broader data structures course, where students also learn about other data structures like trees, graphs, etc. and their applications.",
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg font-poppins max-w-5xl mx-auto my-8">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-500 text-center">
        Linked List Fundamentals
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

export default LinkedlistAim;
