import React from "react";

const BinaryBasic = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-6xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Basics of Binary Search
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Introduction to Binary Search
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Binary search is a highly efficient search algorithm that operates on
          sorted data structures. It is based on the divide-and-conquer
          principle, where the search space is repeatedly divided into halves.
          The target value is compared with the middle element of the data
          structure, and based on the result, the search continues in either the
          left or right half of the remaining data.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          For binary search to work, the data must be sorted. The algorithm
          begins by comparing the middle element with the target. If the target
          is smaller than the middle element, the search is confined to the left
          half; if larger, the search continues in the right half. This process
          is repeated until the target is found or the search space is reduced
          to zero.
        </p>
        <p className="text-lg text-gray-700">
          Binary search is significantly more efficient than linear search for
          large, sorted datasets, as it reduces the search space by half in each
          step, resulting in a time complexity of O(log n). However, it is not
          suitable for unsorted data without prior sorting.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Divide and Conquer Principle in Binary Search
        </h3>
        <p className="text-lg text-gray-700">
          Binary search operates on the divide and conquer principle, where the
          search space is continuously divided into halves. Imagine searching
          for a word in a dictionary: instead of checking each word
          sequentially, you open the dictionary to a page near the middle,
          compare the word you are looking for with the middle word, and then
          decide to look either in the first or second half of the dictionary.
          By repeating this process, you quickly narrow down the search space.
          This makes binary search highly efficient for large, sorted datasets.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Types of Binary Search
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Iterative Binary Search:</strong> In an iterative binary
            search, the algorithm divides the search space into halves using a
            loop. The middle element of the array or list is compared with the
            target value, and the search continues in either the left or right
            half based on the comparison. This method is preferred when
            recursion should be avoided, as it uses fewer resources in terms of
            memory.
          </li>
          <li>
            <strong>Recursive Binary Search:</strong> A recursive binary search
            follows the same process as the iterative version but uses recursive
            function calls instead of loops. The function is called repeatedly,
            each time narrowing the search to one half of the array. This method
            is more elegant and concise but may use more memory due to recursive
            function calls, making it less efficient in some cases.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Basic Operations in Binary Search
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>search():</strong> The search operation divides the sorted
            data structure into two halves. It compares the target value with
            the middle element and narrows the search to the left or right half
            based on the comparison. This process repeats until the target value
            is found or the search space becomes empty.
          </li>
          <li>
            <strong>findMid():</strong> This operation calculates the middle
            index of the current search space. The middle element is crucial in
            binary search, as it determines whether the search will proceed to
            the left or right half.
          </li>
          <li>
            <strong>isFound():</strong> This operation checks whether the target
            value is found during the binary search. It returns true if the
            target is located and false if the search space is exhausted without
            finding the target.
          </li>
          <li>
            <strong>isSorted():</strong> Binary search requires the data to be
            sorted. This operation checks whether the input list or array is
            sorted before the binary search is initiated. If the data is
            unsorted, binary search cannot proceed.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Implementation and Traversal of Binary Search
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Implementation of Binary Search: Binary search is implemented on
          sorted data and works by repeatedly dividing the search space into
          halves. The middle element of the current subarray is compared with
          the target, and based on the comparison, the search proceeds in the
          left or right half.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Traversal in Binary Search:
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-blue-500">
              Step-by-Step Traversal:
            </h4>
            <p className="text-lg text-gray-700">
              Binary search doesn't visit each element. Instead, it halves the
              search space at each step. First, it compares the target with the
              middle element. If the target is less than the middle element, the
              search proceeds in the left half. If it is greater, it proceeds in
              the right half. This process continues until the target is found
              or the search space is exhausted.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500">
              Time Complexity:
            </h4>
            <p className="text-lg text-gray-700">
              O(log n), where n is the number of elements. Since the search
              space is halved at each step, the algorithm is much faster for
              large datasets compared to linear search.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500">Best Case:</h4>
            <p className="text-lg text-gray-700">
              O(1): The best case happens when the target element is the middle
              element of the array during the first comparison. In this
              scenario, the algorithm terminates after just one comparison,
              making the time complexity constant, O(1).
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500">
              Average Case:
            </h4>
            <p className="text-lg text-gray-700">
              O(log n): The average case time complexity for binary search is
              also O(log n), as the target could be located anywhere in the
              sorted array. On average, the algorithm will make log₂(n)
              comparisons before finding the target.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500">Worst Case:</h4>
            <p className="text-lg text-gray-700">
              O(log n): The worst case occurs when the target element is either
              near the start or end of the sorted array. Each time, the array is
              divided in half, leading to a logarithmic time complexity. The
              algorithm will keep halving the search space until the target is
              found or the search space becomes empty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BinaryBasic;
