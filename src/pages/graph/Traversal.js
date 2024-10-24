import React from "react";

const GraphTraversal = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Graph Traversal: Breadth-First Search (BFS)
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Breadth-First search
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Traversal means visiting all the nodes of a graph. Breadth First
          Traversal or Breadth First Search is a recursive algorithm for
          searching all the vertices of a graph or tree data structure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">BFS Algorithm</h2>
        <p className="text-lg text-gray-700 mb-4">
          A standard BFS implementation puts each vertex of the graph into one
          of two categories:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
          <li className="pl-5">Visited</li>
          <li className="pl-5">Not Visited</li>
        </ol>
        <p className="text-lg text-gray-700 mb-4 mt-4">
          The purpose of the algorithm is to mark each vertex as visited while
          avoiding cycles.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The algorithm works as follows:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
          <li className="pl-5">
            Start by putting any one of the graph's vertices at the back of a
            queue.
          </li>
          <li className="pl-5">
            Take the front item of the queue and add it to the visited list.
          </li>
          <li className="pl-5">
            Create a list of that vertex's adjacent nodes. Add the ones which
            aren't in the visited list to the back of the queue.
          </li>
          <li className="pl-5">
            Keep repeating steps 2 and 3 until the queue is empty.
          </li>
        </ol>
        <p className="text-lg text-gray-700 mb-4 mt-4">
          The graph might have two different disconnected parts so to make sure
          that we cover every vertex, we can also run the BFS algorithm on every
          node
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">BFS Example</h2>
        <p className="text-lg text-gray-700 mb-4">
          Let's see how the Breadth First Search algorithm works with an
          example. We use an undirected graph with 5 vertices.
        </p>
        <div className="mb-4">
          <img
            src="https://cdn.programiz.com/sites/tutorial2program/files/graph-bfs-step-0.png"
            alt="Initial graph"
            className="mx-auto "
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          We start from vertex 0, the BFS algorithm starts by putting it in the
          Visited list and putting all its adjacent vertices in the queue.
        </p>
        <div className="mb-4">
          <img
            src="https://cdn.programiz.com/sites/tutorial2program/files/graph-bfs-step-1.png"
            alt="BFS step 1"
            className="mx-auto"
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Next, we visit the element at the front of queue i.e. 1 and go to its
          adjacent nodes. Since 0 has already been visited, we visit 2 instead.
        </p>
        <div className="mb-4">
          <img
            src="https://cdn.programiz.com/sites/tutorial2program/files/graph-bfs-step-2_2.png"
            alt="BFS step 2"
            className="mx-auto "
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the
          back of the queue and visit 3, which is at the front of the queue.
        </p>
        <div className="mb-4">
          <img
            src="https://cdn.programiz.com/sites/tutorial2program/files/graph-bfs-step-3.png"
            alt="BFS step 3"
            className="mx-auto "
          />
          <p className="text-lg text-gray-700 mb-4">
            Visit 2 which was added to queue to add its neighbours
          </p>
          <img
            src="https://cdn.programiz.com/sites/tutorial2program/files/graph-bfs-step-4.png"
            alt="BFS step 4"
            className="mx-auto "
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Only 4 remains in the queue since the only adjacent node of 3 i.e. 0
          is already visited. We visit it.
        </p>
        <div className="mb-4">
          <img
            src="https://cdn.programiz.com/sites/tutorial2program/files/graph-bfs-step-4.png"
            alt="BFS step 4"
            className="mx-auto rounded-lg shadow-md"
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Since the queue is empty, we have completed the Breadth First
          Traversal of the graph.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          BFS pseudocode
        </h2>
        <pre className="bg-white p-4 rounded-lg shadow-inner overflow-x-auto text-sm mb-4">
          {`create a queue Q 
mark v as visited and put v into Q 
while Q is non-empty 
    remove the head u of Q 
    mark and enqueue all (unvisited) neighbours of u
`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Time and Space Complexity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Time Complexity
            </h3>
            <p className="text-gray-700">
              <strong>O(V + E)</strong>
              <br />
              where V is the number of vertices and E is the number of edges in
              the graph.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Space Complexity
            </h3>
            <p className="text-gray-700">
              <strong>O(V)</strong>
              <br />
              where V is the number of vertices in the graph.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Applications of BFS
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Shortest path and minimum spanning tree for unweighted graph</li>
          <li>Peer to peer networks</li>
          <li>Crawlers in search engines</li>
          <li>Social networking websites</li>
          <li>GPS navigation systems</li>
          <li>Broadcasting in network</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Advantages and Disadvantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Advantages
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Guarantees the shortest path in unweighted graphs</li>
              <li>Good for searching nodes closer to the given node</li>
              <li>Useful for finding the shortest path on unweighted graphs</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Disadvantages
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>More memory required than depth-first search</li>
              <li>Can be slower than depth-first search for some problems</li>
              <li>
                Not suitable for decision making trees used in games or puzzles
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphTraversal;
