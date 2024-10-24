import React from "react";

const GraphImplementation = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8 focus:outline-none">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Graph Implementation
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This page covers the implementation of Graphs in various ways.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          A Basic Graph Implementation
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Before we can run algorithms on a Graph, we must first implement it
          somehow. We will use an Adjacency Matrix, as shown below, to implement
          a Graph.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Undirected Graph and its Adjacency Matrix
        </h3>
        <img
          src="https://cdn.programiz.com/sites/tutorial2program/files/adjacency-matrix_1.png"
          alt="Adjacency Matrix"
          className="w-full h-auto rounded-lg mb-4"
        />

        <p className="text-lg text-gray-700 mb-2">
          To store data for each vertex, the letters A, B, C, and D are placed
          in a separate array:
        </p>
        <pre className="bg-white p-4 rounded-lg shadow-inner overflow-x-auto text-sm mb-4">
          {`vertexData = [ 'A', 'B', 'C', 'D']`}
        </pre>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          Graph Implementation Using Classes
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          A more proper way to store a Graph is to add an abstraction layer
          using classes so that a Graph's vertices, edges, and relevant methods,
          like algorithms that we will implement later, are contained in one
          place.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Programming languages with built-in object-oriented functionality like
          Python and Java, make implementation of Graphs using classes much
          easier than languages like C, without this built-in functionality.
        </p>
        <pre className="bg-white p-4 rounded-lg shadow-inner overflow-x-auto text-sm mb-4">
          {`// Initialize the matrix to zero
void init(int arr[][V]) {
    int i, j;
    for (i = 0; i < V; i++)
        for (j = 0; j < V; j++)
            arr[i][j] = 0;
}

// Add edges
void addEdge(int arr[][V], int i, int j) {
    arr[i][j] = 1;
    arr[j][i] = 1;
}

// Print the matrix
void printAdjMatrix(int arr[][V]) {
    int i, j;

    for (i = 0; i < V; i++) {
        printf("%d: ", i);
        for (j = 0; j < V; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }
}

printGraph() {
    console.log(this.adjMatrix);
    console.log(this.vertexData);
  }
}`}
        </pre>
        <p className="text-lg text-gray-700 mb-4">
          The above code shows how to implement an undirected graph using an
          adjacency matrix and how to represent it using a class structure.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          Directed and Weighted Graphs
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          For a directed and weighted graph, weights are added to the edges, and
          the adjacency matrix stores these values. Here's an example:
        </p>
        <pre className="bg-white p-4 rounded-lg shadow-inner overflow-x-auto text-sm mb-4">
          {`class Graph {
  constructor(size) {
    this.adjMatrix = Array(size).fill(null).map(() => Array(size).fill(null));
    this.vertexData = Array(size).fill('');
  }
  
  addEdge(u, v, weight) {
    this.adjMatrix[u][v] = weight;
  }
  
  printGraph() {
    console.log(this.adjMatrix);
    console.log(this.vertexData);
  }
}`}
        </pre>
      </section>
    </div>
  );
};

export default GraphImplementation;
