import React from "react";

const BinaryOverview = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Prerequisites and Module Overview
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Prerequisites:
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
          <li>
            <strong>Basic Understanding of Arrays and Lists:</strong> A clear
            grasp of how arrays and lists work is essential since binary search
            requires sorted data structures.
          </li>
          <li>
            <strong>Sorting Techniques:</strong> Knowledge of sorting algorithms
            (like bubble sort, quicksort, etc.) is useful since binary search is
            only effective on sorted data.
          </li>
          <li>
            <strong>Basic Iteration and Recursion:</strong> Understanding loops
            and recursive functions will help you implement binary search
            efficiently, as the algorithm can be implemented both iteratively
            and recursively.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Module Overview:
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          This module on data structures provides an in-depth exploration of
          various data structures. It includes:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
          <li>
            <strong>Lectures:</strong> In-depth lessons covering the concept and
            algorithm of binary search. Explanation of how binary search works
            on sorted arrays, its efficiency (O(log n) time complexity), and
            comparisons with linear search.
          </li>
          <li>
            <strong>Hands-On Practice Exercises:</strong> Practical exercises to
            implement binary search in both iterative and recursive forms.
            Testing the algorithm on different sorted arrays and lists,
            exploring edge cases and performance optimizations.
          </li>
          <li>
            <strong>Quizzes for Self-Assessment:</strong> Quizzes that challenge
            your understanding of binary search theory and implementation. These
            self-assessment quizzes will help you check your progress and
            identify areas that need more focus.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Throughout this module, you will gain valuable skills and insights
          into the effective use of arrays, lists, and matrices, preparing you
          for more advanced topics in data structures and algorithms.
        </p>
      </section>
    </div>
  );
};

export default BinaryOverview;
