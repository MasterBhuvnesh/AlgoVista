import React from "react";

const GraphAim = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg font-poppins max-w-5xl mx-auto my-8">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-500 text-center">
        Graph Fundamentals
      </h2>
      <ul className="space-y-4 text-lg text-gray-700">
        {[
          "Understand the concept of a graph as a non-linear data structure comprising vertices [ nodes ] and edges.",
          "Identify and describe various types of graphs, including weighted, directed, and looped graphs.",
          "Learn different methods for representing graphs, such as using matrices, lists, and arrays.",
          "Implement graphs using classes, with a focus on Directed and Weighted Graphs.",
          "Apply Depth-First Search [ DFS ] and Breadth-First Search [ BFS ] algorithms for graph traversal.",
          "Determine whether a graph is cyclic or acyclic using techniques for both directed graphs and Union-Find algorithms.",
          "Gain introductory knowledge of algorithms that utilize graph data structures.",
        ].map((item, index) => (
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

export default GraphAim;
