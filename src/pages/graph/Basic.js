import React from "react";

const GraphBasic = () => {
  return (
    <div className="p-8  rounded-xl shadow-lg font-poppins max-w-6xl mx-auto my-8 bg-gradient-to-br from-blue-50 to-sky-100 justify-center">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Basic Graph Concepts
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This page covers the basic concepts of Graphs.
      </p>

      {/* YouTube Video Embed */}

      <div className="video-container my-8 overflow-hidden">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/0sQE8zKhad0"
          title="Graph Data Structure | Illustrated Data Structures"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full aspect-video h-90 pl-64 pr-64 rounded-lg"
        ></iframe>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Introduction to Graphs
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          A graph is a non-linear data structure consisting of vertices (nodes)
          and edges. The fundamental components of a graph are:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong className="text-blue-500">Vertex (Node):</strong> A point or
            object in the graph.
          </li>
          <li>
            <strong className="text-blue-500">Edge:</strong> A connection
            between two vertices.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Graphs are non-linear because they allow multiple paths between
          vertices, unlike linear data structures such as arrays or linked
          lists.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Types of Graphs
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Directed Graphs (Digraphs)
          </h3>
          <p className="text-lg text-gray-700 mb-2">
            In a directed graph, each edge has a direction, going from one
            vertex to another. This direction is typically represented by an
            arrow. Directed graphs are used in scenarios such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>
              <strong className="text-blue-500">Task Scheduling:</strong> Tasks
              are vertices, and dependencies are directed edges.
            </li>
            <li>
              <strong className="text-blue-500">Web Page Link Analysis:</strong>{" "}
              Web pages are vertices, and hyperlinks are directed edges.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Undirected Graphs
          </h3>
          <p className="text-lg text-gray-700 mb-2">
            In an undirected graph, edges have no direction. The connection
            between two vertices is bidirectional. Undirected graphs are
            commonly used in:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>
              <strong className="text-blue-500">Social Networks:</strong>{" "}
              Relationships between individuals are bidirectional.
            </li>
            <li>
              <strong className="text-blue-500">Network Topologies:</strong>{" "}
              Computer networks where connections are mutual.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Graph Terminology
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          {[
            {
              term: "Path",
              desc: "A sequence of edges connecting a series of vertices. For example, in a graph representing a city map, a path could represent a route from one location to another.",
            },
            {
              term: "Loop",
              desc: "An edge that connects a vertex to itself. In a network, this might represent a feedback loop or self-referencing connection.",
            },
            {
              term: "Degree",
              desc: "The number of edges incident to a vertex. In social networks, the degree of a vertex could represent the number of friends an individual has.",
            },
            {
              term: "Cycle",
              desc: "A path that starts and ends at the same vertex without repeating any edge. In logistics, cycles might represent routes that return to the starting point.",
            },
            {
              term: "Connected Graph",
              desc: "A graph where there is a path between any pair of vertices. Useful in scenarios like ensuring all nodes in a network are reachable.",
            },
            {
              term: "Complete Graph",
              desc: "A graph in which every pair of distinct vertices is connected by a unique edge. This is used in scenarios requiring maximum connectivity, like communication networks.",
            },
            {
              term: "Weighted Graph",
              desc: "A graph where edges have weights representing values such as distance or cost. Used in routing problems, like finding the shortest path in a map.",
            },
            {
              term: "Simple Graph",
              desc: "A graph without loops or multiple edges between the same pair of vertices. Simple graphs are often used in theoretical studies and algorithms.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start"
            >
              <svg
                className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div>
                <strong className="text-blue-500">{item.term}:</strong>{" "}
                {item.desc}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Graph Representations
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Graphs can be represented in various ways, each with its own
          advantages:
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          {[
            {
              term: "Adjacency Matrix",
              desc: "A 2D array where each cell at index (i, j) represents the presence or weight of an edge from vertex i to vertex j.",
            },
            {
              term: "Adjacency List",
              desc: "An array where each vertex points to a list of adjacent vertices. This representation is more space-efficient for sparse graphs.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start"
            >
              <svg
                className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div>
                <strong className="text-blue-500">{item.term}:</strong>{" "}
                {item.desc}
              </div>
            </li>
          ))}
        </ul>
        <p className="text-lg text-gray-700 mt-4 bg-blue-100 p-4 rounded-lg">
          In this tutorial, we'll use the Adjacency Matrix representation for
          simplicity and broad applicability. You'll learn how to implement it
          on the next page.
        </p>
      </section>
    </div>
  );
};

export default GraphBasic;
