import React, { useState } from "react";

const HashingGraphicalRepresentation = () => {
  const [input, setInput] = useState("");
  const [hashValue, setHashValue] = useState(null);
  const [steps, setSteps] = useState([]);

  const simpleHash = (arr) => {
    let hash = 0;
    let stepDetails = [];
    for (let i = 0; i < arr.length; i++) {
      hash = (hash << 5) - hash + arr[i];
      hash |= 0; // Convert to 32bit integer
      stepDetails.push(`Step ${i + 1}: Hash = ${hash}`);
    }
    setSteps(stepDetails);
    return hash;
  };

  const handleHash = () => {
    const numbers = input.split(",").map(Number);
    const hash = simpleHash(numbers);
    setHashValue(hash);
  };

  const handleRandom = () => {
    const randomNumbers = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100)
    );
    setInput(randomNumbers.join(","));
    const hash = simpleHash(randomNumbers);
    setHashValue(hash);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-500 text-center">
        Simple Hashing Demonstration
      </h2>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter numbers separated by commas"
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={handleHash}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Hash
        </button>
        <button
          onClick={handleRandom}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Random
        </button>
      </div>
      {hashValue !== null && (
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2 text-blue-500">Hash Value:</h3>
          <p className="text-lg text-gray-700">{hashValue}</p>
        </div>
      )}
      {steps.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-2 text-blue-500">Steps:</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HashingGraphicalRepresentation;
