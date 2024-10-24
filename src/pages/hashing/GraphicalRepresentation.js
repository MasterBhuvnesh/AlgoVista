import React, { useState } from "react";

// Function to find the next prime number
const findNextPrime = (num) => {
  const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  while (!isPrime(num)) {
    num++;
  }
  return num;
};

const HashingVisualization = () => {
  const [inputArray, setInputArray] = useState([]);
  const [hashTable, setHashTable] = useState([]);
  const [nextPrime, setNextPrime] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [hashingSteps, setHashingSteps] = useState([]);

  // Handle user input
  const handleInputChange = (e) => {
    const arr = e.target.value.split(",").map(Number);
    setInputArray(arr);
    setNextPrime(findNextPrime(arr.length + 1));
    setHashingSteps([]);
    setCurrentStep(0);
    setHashTable([]);
  };

  // Generate random array
  const generateRandomArray = () => {
    const arr = Array.from({ length: Math.floor(Math.random() * 10) + 3 }, () =>
      Math.floor(Math.random() * 100)
    );
    setInputArray(arr);
    setNextPrime(findNextPrime(arr.length + 1));
    setHashingSteps([]);
    setCurrentStep(0);
    setHashTable([]);
  };

  // Hashing function with linear probing and step-by-step updates
  const hashArrayStepByStep = () => {
    let steps = [];
    const newHashTable = Array(nextPrime).fill(null);

    inputArray.forEach((num, i) => {
      let index = num % nextPrime;
      let equation = `${num} mod ${nextPrime} = ${index}`;
      let step = {
        element: num,
        index,
        equation,
        message: `Hashing ${num}: ${equation}`,
      };

      while (newHashTable[index] !== null) {
        step.message = `${step.message} (Collision at index ${index}, moving to next index)`;
        index = (index + 1) % nextPrime; // Linear probing
      }

      newHashTable[index] = num;
      steps.push({
        hashTable: [...newHashTable],
        step,
      });
    });

    setHashingSteps(steps);
    setCurrentStep(0); // Start from the first step
  };

  const nextStep = () => {
    if (currentStep < hashingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto font-poppins">
      <h1 className="text-2xl font-bold mb-4">
        Hashing Visualization with Steps
      </h1>

      {/* Input Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter numbers (comma-separated)"
          className="border p-2 rounded w-full"
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={generateRandomArray}
        >
          Generate Random Array
        </button>
      </div>

      {/* Input Array Display */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Input Array</h2>
        <div className="flex space-x-2 mt-2">
          {inputArray.map((num, index) => (
            <div
              key={index}
              className="border p-2 rounded"
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Prime Display */}
      {nextPrime && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Next Prime: {nextPrime}</h2>
        </div>
      )}

      {/* Buttons for Hashing Steps */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={hashArrayStepByStep}
      >
        Hash Array Step by Step
      </button>

      {/* Step Navigation Buttons */}
      {hashingSteps.length > 0 && (
        <div className="mt-4 flex justify-between">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            Previous Step
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={nextStep}
            disabled={currentStep === hashingSteps.length - 1}
          >
            Next Step
          </button>
        </div>
      )}

      {/* Display Current Step */}
      {hashingSteps.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">
            Current Step: {currentStep + 1}
          </h2>
          <p className="mb-2">{hashingSteps[currentStep]?.step?.message}</p>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {hashingSteps[currentStep]?.hashTable.map((num, index) => (
              <div
                key={index}
                className={`border p-2 rounded text-center ${
                  num === null ? "bg-gray-200" : "bg-blue-200"
                }`}
              >
                {num !== null ? num : "-"}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display Final Hash Table as Array */}
      {hashingSteps.length > 0 && currentStep === hashingSteps.length - 1 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            Final Hash Table (Array Format):
          </h2>
          <div className="bg-gray-100 border border-gray-300  rounded-md shadow mt-2">
            <p className="bg-green-500 text-white px-4 py-2 ">
              [
              {hashingSteps[currentStep]?.hashTable
                .map((num) => (num !== null ? num : "-"))
                .join(", ")}
              ]
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HashingVisualization;
