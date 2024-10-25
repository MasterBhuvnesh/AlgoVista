import React, { useState, useCallback } from "react";

const LinkedlistGraphicalRepresentation = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [insertIndex, setInsertIndex] = useState("");
  const [message, setMessage] = useState("");

  const addToFront = useCallback(() => {
    if (inputValue.trim() === "") {
      setMessage("Please enter a value to add.");
      return;
    }
    setList((prevList) => [
      { value: inputValue, next: prevList[0] ? prevList[0].id : null },
      ...prevList,
    ]);
    setInputValue("");
    setMessage(`Added ${inputValue} to the front of the list.`);
  }, [inputValue]);

  const addToEnd = useCallback(() => {
    if (inputValue.trim() === "") {
      setMessage("Please enter a value to add.");
      return;
    }
    setList((prevList) => [...prevList, { value: inputValue, next: null }]);
    setInputValue("");
    setMessage(`Added ${inputValue} to the end of the list.`);
  }, [inputValue]);

  const addAtIndex = useCallback(() => {
    if (inputValue.trim() === "") {
      setMessage("Please enter a value to add.");
      return;
    }
    const index = parseInt(insertIndex);
    if (isNaN(index) || index < 0 || index > list.length) {
      setMessage("Please enter a valid index.");
      return;
    }
    setList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 0, { value: inputValue, next: null });
      return newList;
    });
    setInputValue("");
    setInsertIndex("");
    setMessage(`Added ${inputValue} at index ${index}.`);
  }, [inputValue, insertIndex, list.length]);

  const removeFromFront = useCallback(() => {
    if (list.length === 0) {
      setMessage("The list is empty. Cannot remove from front.");
      return;
    }
    const removedValue = list[0].value;
    setList((prevList) => prevList.slice(1));
    setMessage(`Removed ${removedValue} from the front of the list.`);
  }, [list]);

  const removeFromEnd = useCallback(() => {
    if (list.length === 0) {
      setMessage("The list is empty. Cannot remove from end.");
      return;
    }
    const removedValue = list[list.length - 1].value;
    setList((prevList) => prevList.slice(0, -1));
    setMessage(`Removed ${removedValue} from the end of the list.`);
  }, [list]);

  const drawList = useCallback(() => {
    return (
      <div className="flex items-center justify-center space-x-2 overflow-x-auto py-4">
        {list.map((node, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-200 border-2 border-blue-500 rounded-full flex items-center justify-center">
                {node.value}
              </div>
              <div className="text-xs mt-1">Node {index + 1}</div>
            </div>
            {index < list.length - 1 && (
              <div className="w-8 h-0.5 bg-blue-500 self-center" />
            )}
          </React.Fragment>
        ))}
        {list.length === 0 && (
          <div className="text-gray-500 italic">List is empty</div>
        )}
      </div>
    );
  }, [list]);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">
        Linked List Visualization
      </h2>
      <div className="mb-4 flex justify-center space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-blue-300 rounded px-2 py-1"
          placeholder="Enter value"
        />
        <input
          type="number"
          value={insertIndex}
          onChange={(e) => setInsertIndex(e.target.value)}
          className="border-2 border-blue-300 rounded px-2 py-1 w-20"
          placeholder="Index"
        />
        <button
          onClick={addToFront}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Front
        </button>
        <button
          onClick={addToEnd}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to End
        </button>
        <button
          onClick={addAtIndex}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add at Index
        </button>
        <button
          onClick={removeFromFront}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove from Front
        </button>
        <button
          onClick={removeFromEnd}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove from End
        </button>
      </div>
      <p className="text-center text-lg mb-4">{message}</p>
      {drawList()}
    </div>
  );
};

export default LinkedlistGraphicalRepresentation;
