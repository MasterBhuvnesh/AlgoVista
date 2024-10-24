import React from "react";

const LinearOverview = () => {
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
            <strong>Basic Understanding of Arrays and Lists:</strong>{" "}
            Familiarity with how arrays and lists function is essential since
            linear search is commonly applied to these data structures.
          </li>
          <li>
            <strong>Introduction to Matrices:</strong> Knowledge of iteration
            techniques, such as using loops to navigate through data structures,
            is important for implementing linear search algorithms.
          </li>
          <li>
            <strong>Curiosity to Learn and Explore:</strong> A willingness to
            explore and understand the fundamentals of searching techniques will
            greatly aid in mastering linear search.
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
            <strong>Lectures:</strong> Detailed lessons explaining the concept
            of linear search, including its algorithm, use cases, and
            differences from other search techniques.
          </li>
          <li>
            <strong>Hands-On Practice Exercises:</strong> Interactive exercises
            where you will implement linear search and test it on various data
            sets to deepen your understanding.
          </li>
          <li>
            <strong>Quizzes for Self-Assessment:</strong> Engaging quizzes that
            allow you to test your comprehension and progress as you learn the
            theory and practical implementation of linear search.
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

export default LinearOverview;
