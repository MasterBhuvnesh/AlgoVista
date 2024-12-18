import React, { useState, useCallback } from "react";
import graphExamples from "../../data/graphExamples.json";

const GraphGraphicalRepresentation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentGraphIndex, setCurrentGraphIndex] = useState(0);

  const currentExample = graphExamples[currentGraphIndex];

  const drawGraph = useCallback(() => {
    const currentBfsStep = currentExample.bfsSteps[currentStep];
    return (
      <svg
        width="400"
        height="400"
      >
        {Object.entries(currentExample.graph).map(([node, neighbors]) =>
          neighbors.map((neighbor) => (
            <line
              key={`${node}-${neighbor}`}
              x1={currentExample.nodePositions[node].x}
              y1={currentExample.nodePositions[node].y}
              x2={currentExample.nodePositions[neighbor].x}
              y2={currentExample.nodePositions[neighbor].y}
              stroke="gray"
              strokeWidth="2"
            />
          ))
        )}
        {Object.entries(currentExample.nodePositions).map(
          ([node, position]) => (
            <g key={node}>
              <circle
                cx={position.x}
                cy={position.y}
                r="20"
                fill={
                  currentBfsStep.visited.includes(node) ? "lightblue" : "white"
                }
                stroke="black"
                strokeWidth="2"
              />
              <text
                x={position.x}
                y={position.y}
                textAnchor="middle"
                dy=".3em"
                fontSize="14"
              >
                {node}
              </text>
            </g>
          )
        )}
      </svg>
    );
  }, [currentExample, currentStep]);

  const nextGraph = () => {
    setCurrentGraphIndex((prevIndex) => (prevIndex + 1) % graphExamples.length);
    setCurrentStep(0);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">
        Graph BFS Visualization
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        This visualization shows how Breadth-First Search (BFS) traverses a
        graph step by step, starting from node 'A'.
      </p>
      <div className="mb-4 bg-white p-4 rounded-lg shadow-inner">
        {drawGraph()}
      </div>
      <div className="mb-4 flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          Previous Step
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() =>
            setCurrentStep(
              Math.min(currentExample.bfsSteps.length - 1, currentStep + 1)
            )
          }
          disabled={currentStep === currentExample.bfsSteps.length - 1}
        >
          Next Step
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextGraph}
        >
          Next Graph
        </button>
      </div>
      <div className="text-lg text-gray-700">
        <p>Current Step: {currentStep + 1}</p>
        <p>
          Visited: {currentExample.bfsSteps[currentStep].visited.join(", ")}
        </p>
        <p>Queue: {currentExample.bfsSteps[currentStep].queue.join(", ")}</p>
        <div className="mt-4">
          {currentExample.bfsSteps.map((step, index) => (
            <p
              key={index}
              className={`mb-2 ${
                index < currentStep
                  ? "text-gray-400"
                  : index === currentStep
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {step.description}
            </p>
          ))}
        </div>
        {currentStep === currentExample.bfsSteps.length - 1 && (
          <p className="mt-4 text-green-600 font-bold">
            BFS traversal is complete!
          </p>
        )}
      </div>
    </div>
  );
};

export default GraphGraphicalRepresentation;
