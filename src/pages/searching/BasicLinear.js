import React from "react";

const LinearBasic = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-6xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Basics of Linear Searching
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Introduction to Linear Search
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Linear search is a simple searching algorithm that operates on both
          sorted and unsorted data. It is based on a sequential checking
          approach, where each element in a data structure (such as an array or
          list) is examined one by one until the desired value is found or the
          end of the structure is reached.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          In linear search, the search begins at the first element and proceeds
          towards the last, comparing each element with the target value. If a
          match is found, the index of that element is returned. If no match is
          found, the algorithm concludes that the target is not present.
        </p>
        <p className="text-lg text-gray-700">
          Linear search does not require any specific data order and is
          particularly useful for small or unsorted datasets where more complex
          algorithms may not be efficient or applicable.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Sequential Search Principle in Linear Search
        </h3>
        <p className="text-lg text-gray-700">
          Linear search follows a sequential checking principle, where each
          element in a data structure is checked one after another in a linear
          fashion. Think of flipping through the pages of a book to find a
          specific word: you start from the first page and check each page
          sequentially until the word is found or you reach the end of the book.
          This method is simple and works on both unsorted and small datasets
          but may be inefficient for larger collections.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Types of Linear Search
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Simple Linear Search:</strong> In a simple linear search,
            the algorithm checks each element of the data structure sequentially
            from the beginning to the end. This is the most basic and
            straightforward version of linear search, applicable to both sorted
            and unsorted datasets. It is often used for small collections where
            efficiency is not a concern.
          </li>
          <li>
            <strong>Sentinel Linear Search:</strong> In a sentinel linear
            search, a sentinel element is placed at the end of the data
            structure to simplify the code by eliminating the need to check for
            the end of the list within the loop. This reduces the number of
            comparisons slightly but otherwise operates similarly to the simple
            linear search, scanning each element until the target is found.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Basic Operations on Linear Search
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>search():</strong> This is the main operation in linear
            search, where the algorithm sequentially checks each element in a
            list or array to find the target value. If the target is found, the
            index of the element is returned; otherwise, it returns a signal
            (e.g., -1 or None) indicating that the element is not present.
          </li>
          <li>
            <strong>isFound():</strong> This operation checks whether the target
            value is found in the list during the search. It returns true if the
            target is found and false if the search reaches the end of the data
            without finding the target.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Implementation and Traversal of Linear Search
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Implementation of Linear Search: Linear search is a straightforward
          algorithm that can be implemented by iterating through each element of
          the data structure (array, list, etc.) one by one. The algorithm
          compares each element with the target value and stops when a match is
          found.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Traversal in Linear Search:
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Step-by-Step Traversal:</strong> Linear search starts from the
          first element and moves sequentially through each element until the
          target value is found or the end of the data is reached. Each element
          is checked only once, so there is no skipping of elements.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          <strong>Time Complexity:</strong> O(n), where n is the number of
          elements in the data structure. In the worst case, the target might be
          at the end of the array, requiring all elements to be checked.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Best Case:</strong> O(1): The best case occurs when the
            target element is located at the first position of the array. In
            this case, only one comparison is needed, so the time complexity is
            constant, O(1).
          </li>
          <li>
            <strong>Average Case:</strong> O(n): In the average case, the target
            element is expected to be somewhere in the middle of the array. On
            average, the algorithm will check n/2 elements before finding the
            target or realizing it's not there. However, constants are omitted
            in Big-O notation, so the average case time complexity remains O(n).
          </li>
          <li>
            <strong>Worst Case:</strong> O(n): The worst case occurs when the
            target element is either at the last position or not present in the
            array at all. The algorithm must go through all n elements of the
            array to confirm the target's presence or absence. Hence, the time
            complexity in the worst case is linear, O(n).
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LinearBasic;
