import React from "react";

const LinkedlistBasic = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-6xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Basics of Linked List
      </h1>

      <div className="video-container my-8 overflow-hidden">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/odW9FU8jPRQ?si=o4JhrY32xKVSimCp"
          title="Linked List | Illustrated Data Structures"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full aspect-video h-90 pl-64 pr-64 rounded-lg"
        ></iframe>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Introduction to Linked List
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          A linked list is a linear data structure that consists of a series of
          nodes connected by pointers or references. Each node contains data and
          a pointer/reference to the next node in the list. The fundamental
          components of a Linked list are:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Data Node:</strong> For storing the data.
          </li>
          <li>
            <strong>Pointer Node:</strong> This points to the next Data node.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          A linked list is a fundamental data structure in computer science. It
          mainly allows efficient insertion and deletion operations compared to
          arrays. Like arrays, it is also used to implement other data
          structures like stack, queue and deque.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Types of Linked List
        </h2>

        <h3 className="text-xl font-bold mb-2 text-blue-600">
          Singly Linked List
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          The node contains a pointer to the next node means that the node
          stores the address of the next node in the sequence. A single linked
          list allows the traversal of data only in one way. Here are some of
          the key applications of singly linked lists:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Implementing Stacks and Queues:</strong> Singly linked lists
            can be used to efficiently implement both stack and queue data
            structures.
          </li>
          <li>
            <strong>Navigation in Web Browsers:</strong> Singly linked lists can
            be used to store the browsing history in web browsers, allowing
            users to navigate back and forth through visited web pages.
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-2 mt-6 text-blue-600">
          Doubly Linked List
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          A doubly linked list or a two-way linked list is a more complex type
          of linked list that contains a pointer to the next as well as the
          previous node in sequence. Doubly Linked List are commonly used in:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Navigation Systems:</strong> Doubly linked lists are useful
            in navigation systems where forward and backward navigation is
            required.
          </li>
          <li>
            <strong>Game Development:</strong> Doubly linked lists can be used
            in games, such as a deck of cards, where the ability to move
            forwards and backwards through the data is important.
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-2 mt-6 text-blue-600">
          Circular Linked List
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          A circular linked list is that in which the last node contains the
          pointer to the first node of the list. Circular Linked List are
          commonly used in:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Process queues:</strong> Circular linked lists can be used
            to maintain a queue of processes, where each process gets a turn in
            a cyclic order.
          </li>
          <li>
            <strong>Scheduling and managing playlists:</strong> Circular linked
            lists are especially helpful for tasks like scheduling and managing
            playlists, allowing for seamless navigation through the list.
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-2 mt-6 text-blue-600">
          Circular Doubly Linked List
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          A circular doubly linked list is defined as a circular linked list in
          which each node has two links connecting it to the previous node and
          the next node. Circular doubly Linked List are commonly used in:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Data manipulation:</strong> Circular doubly linked lists
            allow for movement in both directions, which can increase
            flexibility.
          </li>
          <li>
            <strong>Repetitive tasks:</strong> The circular structure of the
            list makes it a natural fit for repetitive tasks.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Advantages of Linked Lists
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Efficient insertion and deletion:</strong> Only a few
            pointers need to be changed, making these operations O(1) time
            complexity.
          </li>
          <li>
            <strong>Versatile:</strong> Can be used to implement other data
            structures like stacks and queues easily.
          </li>
          <li>
            <strong>Dynamic size:</strong> More space-efficient for unknown
            number of elements compared to arrays.
          </li>
          <li>
            <strong>Ideal for Queue and Deque:</strong> Simpler implementation
            compared to circular arrays.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LinkedlistBasic;
