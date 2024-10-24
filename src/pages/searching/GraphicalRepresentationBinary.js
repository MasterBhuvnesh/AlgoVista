import React, { useState, useCallback, useEffect } from "react";

const BinaryGraphicalRepresentation = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [searchSteps, setSearchSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);

  const addElement = useCallback(() => {
    if (inputValue.trim() === "") {
      setMessage("Please enter a valid number.");
      return;
    }
    setArray((prevArray) =>
      [...prevArray, Number(inputValue)].sort((a, b) => a - b)
    );
    setInputValue("");
    setMessage(`Element added. Current array: [${array.join(", ")}]`);
  }, [inputValue, array]);

  const generateRandomExample = useCallback(() => {
    const randomArray = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    ).sort((a, b) => a - b);
    setArray(randomArray);
    setMessage(`Random array generated: [${randomArray.join(", ")}]`);
    setSearchSteps([]);
    setCurrentStepIndex(-1);
  }, []);

  const handleSearch = useCallback(() => {
    const target = Number(key);
    let left = 0;
    let right = array.length - 1;
    const steps = [];

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      steps.push({ left, mid, right });

      if (array[mid] === target) {
        setMessage(`Key ${target} found at index ${mid}.`);
        setSearchSteps(steps);
        setCurrentStepIndex(0);
        return;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setMessage(`Key ${target} not found.`);
    setSearchSteps(steps);
    setCurrentStepIndex(0);
  }, [array, key]);

  useEffect(() => {
    if (currentStepIndex >= 0 && currentStepIndex < searchSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStepIndex((prevIndex) => prevIndex + 1);
      }, 1000); // 1 second delay between steps
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex, searchSteps]);

  const drawArray = useCallback(() => {
    const currentStep = searchSteps[currentStepIndex] || {};
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {array.map((value, index) => {
          const isLeft = currentStep.left === index;
          const isMid = currentStep.mid === index;
          const isRight = currentStep.right === index;
          return (
            <div
              key={index}
              className={`w-12 h-12 flex items-center justify-center border-2 ${
                isMid
                  ? "bg-green-300"
                  : isLeft
                  ? "bg-yellow-300"
                  : isRight
                  ? "bg-red-300"
                  : "bg-blue-200"
              }`}
            >
              {value}
            </div>
          );
        })}
      </div>
    );
  }, [array, searchSteps, currentStepIndex]);

  const renderSteps = useCallback(() => {
    return (
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Search Steps:
        </h3>
        <ul className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
          {searchSteps.slice(0, currentStepIndex + 1).map((step, index) => (
            <li key={index}>
              Step {index + 1}: Left = {step.left}, Mid = {step.mid}, Right ={" "}
              {step.right}
            </li>
          ))}
        </ul>
      </div>
    );
  }, [searchSteps, currentStepIndex]);

  const resetSearch = () => {
    setCurrentStepIndex(-1);
    setSearchSteps([]);
    setMessage("");
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
        Binary Search Visualization
      </h1>
      <div className="mb-4 flex justify-center space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-blue-300 rounded px-2 py-1"
          placeholder="Enter element"
        />
        <button
          onClick={addElement}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Element
        </button>
        <button
          onClick={generateRandomExample}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Random Example
        </button>
      </div>
      <div className="mb-4 flex justify-center space-x-2">
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="border-2 border-blue-300 rounded px-2 py-1"
          placeholder="Enter key to search"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Search Key
        </button>
        <button
          onClick={resetSearch}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Restart
        </button>
      </div>
      <p className="text-center text-lg mb-4">{message}</p>
      {drawArray()}
      {renderSteps()}
    </div>
  );
};

export default BinaryGraphicalRepresentation;
