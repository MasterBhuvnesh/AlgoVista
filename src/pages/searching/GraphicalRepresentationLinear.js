import React, { useState, useCallback, useEffect } from "react";

const LinearGraphicalRepresentation = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);

  const addElement = useCallback(() => {
    if (inputValue.trim() === "") {
      setMessage("Please enter a valid number.");
      return;
    }
    setArray((prevArray) => [...prevArray, Number(inputValue)]);
    setInputValue("");
    setMessage(`Element added. Current array: [${array.join(", ")}]`);
  }, [inputValue, array]);

  const generateRandomExample = useCallback(() => {
    const randomArray = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(randomArray);
    setMessage(`Random array generated: [${randomArray.join(", ")}]`);
    setCurrentStepIndex(-1);
  }, []);

  const handleSearch = useCallback(() => {
    const target = Number(key);
    setCurrentStepIndex(0);
    setMessage(`Searching for key ${target}...`);
  }, [key]);

  useEffect(() => {
    if (currentStepIndex >= 0 && currentStepIndex < array.length) {
      const timer = setTimeout(() => {
        if (array[currentStepIndex] === Number(key)) {
          setMessage(`Key ${key} found at index ${currentStepIndex}.`);
          setCurrentStepIndex(array.length); // Stop the search but keep steps visible
        } else if (currentStepIndex === array.length - 1) {
          setMessage(`Key ${key} not found.`);
          setCurrentStepIndex(array.length); // Stop the search but keep steps visible
        } else {
          setCurrentStepIndex((prevIndex) => prevIndex + 1);
        }
      }, 1000); // 1 second delay between steps
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex, array, key]);

  const drawArray = useCallback(() => {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {array.map((value, index) => {
          const isCurrent = currentStepIndex === index;
          return (
            <div
              key={index}
              className={`w-12 h-12 flex items-center justify-center border-2 ${
                isCurrent ? "bg-green-300" : "bg-blue-200"
              }`}
            >
              {value}
            </div>
          );
        })}
      </div>
    );
  }, [array, currentStepIndex]);

  const renderSteps = useCallback(() => {
    return (
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Search Steps:
        </h3>
        <ul className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
          {array.slice(0, currentStepIndex + 1).map((value, index) => (
            <li key={index}>
              Step {index + 1}: Checking index {index}, value = {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }, [array, currentStepIndex]);

  const resetSearch = () => {
    setCurrentStepIndex(-1);
    setMessage("");
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
        Linear Search Visualization
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

export default LinearGraphicalRepresentation;
