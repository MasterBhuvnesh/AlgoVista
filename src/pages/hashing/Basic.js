import React from "react";

const HashingBasic = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-6xl mx-auto my-8">
      <div className="content">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
          Basic of Hashing Function
        </h1>

        <div className="video-container my-8 overflow-hidden">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/jalSiaIi8j4?list=PLkZYeFmDuaN2-KUIv-mvbjfKszIGJ4FaY&index=6"
            title="Stack Data Structure | Illustrated Data Structures"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full aspect-video h-90 pl-64 pr-64 rounded-lg"
          ></iframe>
        </div>
        <h1 className="text-2xl font-semibold mb-4 text-blue-700">
          Introduction to Hashing Function:
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Hashing is a fundamental concept in computer science and plays a
          crucial role in various applications, from data retrieval to
          cryptography. A hashing function is a special type of function that
          takes an input (or "key") and returns a fixed-size string of bytes,
          typically a hash code or hash value.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Hashing is a fundamental concept in computer science and plays a
              crucial role in various applications, from data retrieval to
              cryptography. A hashing function is a special type of function
              that takes an input (or "key") and returns a fixed-size string of
              bytes, typically a hash code or hash value.
            </li>
            <li>
              In computer science, it involves converting input data of any size
              (like a string, number, or file) into a fixed-size string of
              bytes, typically a numerical value, known as a hash code or hash
              value.
            </li>
          </ul>
        </p>
        <br />
        <h1 className="text-2xl font-semibold mb-4 text-blue-700">
          Importance in Data Structures
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Hashing is fundamental in various data structures, especially hash
          tables, enabling efficient data retrieval. By transforming data into
          hash codes, systems can quickly access, insert, or delete data without
          the need to search through entire datasets.
        </p>
        <br />
        <h1 className="text-2xl font-semibold mb-4 text-blue-700">
          Real-World Analogy
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Think of a hash function as a unique identifier generator. For
          example, assigning a unique employee ID based on the employee's name
          ensures quick retrieval of their records without sifting through all
          employee names.
        </p>
        <br />
        <h1 className="text-2xl font-semibold mb-4 text-blue-700">
          What Does a Hash Function Do?
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          A hash function takes input data and produces a fixed-size string of
          characters, which appears random. The output is typically a numerical
          value used to index data in hash tables.
        </p>
      </div>
    </div>
  );
};

export default HashingBasic;
