import React, { useState, useCallback } from "react";

const StackGraphicalRepresentation = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [maxSize, setMaxSize] = useState(5);

  const push = useCallback(() => {
    if (stack.length >= maxSize) {
      setMessage("Stack Overflow! Cannot push more elements.");
      return;
    }
    if (inputValue.trim() === "") {
      setMessage("Please enter a value to push.");
      return;
    }
    setStack((prevStack) => [...prevStack, inputValue]);
    setInputValue("");
    setMessage(`Pushed ${inputValue} to the stack.`);
  }, [inputValue, stack.length, maxSize]);

  const pop = useCallback(() => {
    if (stack.length === 0) {
      setMessage("Stack Underflow! Cannot pop from an empty stack.");
      return;
    }
    const poppedValue = stack[stack.length - 1];
    setStack((prevStack) => prevStack.slice(0, -1));
    setMessage(`Popped ${poppedValue} from the stack.`);
  }, [stack]);

  const peek = useCallback(() => {
    if (stack.length === 0) {
      setMessage("Stack is empty. Cannot peek.");
      return;
    }
    setMessage(`Top element: ${stack[stack.length - 1]}`);
  }, [stack]);

  const drawStack = useCallback(() => {
    return (
      <div className="flex flex-col items-center border-2 border-blue-500 p-4 w-40 mx-auto">
        {stack.length === 0 ? (
          <div className="text-gray-500 italic">Stack is empty</div>
        ) : (
          <>
            {stack
              .slice()
              .reverse()
              .map((item, index) => (
                <div
                  key={index}
                  className={`w-full p-2 mb-2 text-center ${
                    index === 0 ? "bg-green-300" : "bg-blue-200"
                  } border border-blue-400`}
                >
                  {item}
                </div>
              ))}
          </>
        )}
      </div>
    );
  }, [stack]);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">
        Stack Visualization
      </h2>
      <div className="mb-4 flex justify-center items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-blue-300 rounded px-2 py-1 mr-2"
          placeholder="Enter value"
        />
        <button
          onClick={push}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Push
        </button>
        <button
          onClick={pop}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Pop
        </button>
        <button
          onClick={peek}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Peek
        </button>
      </div>
      <div className="mb-4 flex justify-center items-center">
        <label className="mr-2">Max Stack Size:</label>
        <input
          type="number"
          value={maxSize}
          onChange={(e) => setMaxSize(Math.max(1, parseInt(e.target.value)))}
          className="border-2 border-blue-300 rounded px-2 py-1 w-16"
          min="1"
        />
      </div>
      <p className="text-center text-lg mb-4">{message}</p>
      {drawStack()}
      <div className="mt-4 text-center">
        <p>Current Stack Size: {stack.length}</p>
        <p>Max Stack Size: {maxSize}</p>
        {stack.length === maxSize && (
          <p className="text-red-500">Stack is full (Overflow condition)</p>
        )}
        {stack.length === 0 && (
          <p className="text-red-500">Stack is empty (Underflow condition)</p>
        )}
      </div>
    </div>
  );
};

export default StackGraphicalRepresentation;
