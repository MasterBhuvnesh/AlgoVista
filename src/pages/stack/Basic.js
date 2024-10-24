import React from "react";

const StackBasic = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg font-poppins max-w-6xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">
        Basics of Stack
      </h1>

      <div className="video-container my-8 overflow-hidden">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/I5lq6sCuABE"
          title="Stack Data Structure | Illustrated Data Structures"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full aspect-video h-90 pl-64 pr-64 rounded-lg"
        ></iframe>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Introduction to Stack
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Stack is a linear data structure based on{" "}
          <strong>LIFO(Last In First Out)</strong> principle in which the
          insertion of a new element and removal of an existing element takes
          place at the same end represented as the top of the stack.
        </p>
        <p className="text-lg text-gray-700">
          To implement the stack, it is required to maintain the pointer to the
          top of the stack, which is the last element to be inserted because we
          can access the elements only on the top of the stack.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          LIFO(Last In First Out) Principle in Stack Data Structure:
        </h3>
        <p className="text-lg text-gray-700">
          This strategy states that the element that is inserted last will come
          out first. You can take a pile of plates kept on top of each other as
          a real-life example. The plate which we put last is on the top and
          since we remove the plate that is at the top, we can say that the
          plate that was put last comes out first.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Representation of Stack Data Structure:
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Stack follows LIFO (Last In First Out) Principle so the element which
          is pushed last is popped first.
        </p>
        <img
          src="https://www.boardinfinity.com/blog/content/images/2022/10/pictorial-representation-of-stack.png"
          alt="Stack Representation"
          className="mx-auto"
        />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Types of Stack Data Structure:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Fixed Size Stack:</strong> As the name suggests, a fixed
            size stack has a fixed size and cannot grow or shrink dynamically.
            If the stack is full and an attempt is made to add an element to it,
            an overflow error occurs. If the stack is empty and an attempt is
            made to remove an element from it, an underflow error occurs.
          </li>
          <li>
            <strong>Dynamic Size Stack:</strong> A dynamic size stack can grow
            or shrink dynamically. When the stack is full, it automatically
            increases its size to accommodate the new element, and when the
            stack is empty, it decreases its size. This type of stack is
            implemented using a linked list, as it allows for easy resizing of
            the stack.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Basic Operations on Stack Data Structure:
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          There are certain operations that can be performed on stack for
          modifying or inspecting it.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>push():</strong> Insert an element into the stack.
          </li>
          <li>
            <strong>pop():</strong> Delete/Remove an element from the stack.
          </li>
          <li>
            <strong>peek():</strong> Returns the topmost element of the stack.
            Sometimes also referred as top()/tos().
          </li>
          <li>
            <strong>isEmpty():</strong> Return true of stack is empty else
            false.
          </li>
          <li>
            <strong>isFull():</strong> Return true if the stack is full else
            false.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Errors while push() or pop() operations:
        </h3>
        <h4 className="text-lg font-semibold mb-2">
          Overflow and Underflow conditions:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Overflow:</strong> A condition where the stack is full (top
            of the stack (TOS) is at MAX-1) while inserting a new element is
            called overflow condition.
          </li>
          <li>
            <strong>Underflow:</strong> A condition where the stack is already
            empty (top of the stack (TOS) is at -1) while removing an element is
            called underflow condition.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Push Operation:
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          Adds an item to the stack. If the stack is full and push operation is
          applied, it is said to be overflow condition.
        </p>
        <h4 className="text-lg font-semibold mb-2">
          Algorithm for push operation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            Before pushing the element to the stack, we check if the stack is
            full.
          </li>
          <li>
            If the stack is full (TOS == MAX-1), then Stack Overflows and we
            cannot insert the element to the stack.
          </li>
          <li>
            Otherwise, we increment the value of TOS by 1 (TOS = TOS + 1) and
            the new value is inserted at TOS position.
          </li>
          <li>
            The elements can be pushed into the stack till we reach the capacity
            (MAX) of the stack.
          </li>
        </ul>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240606180844/Push-Operation-in-Stack-(1).webp"
          alt="Push Operation in Stack"
          className="mx-auto my-4 h-[350px] w-[550px]"
        />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Pop Operation:
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          Removes an item from the stack. If stack is empty and pop operation is
          applied, it is said to be underflow condition.
        </p>
        <h4 className="text-lg font-semibold mb-2">
          Algorithm for pop operation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            Before popping the element from the stack, we check if the stack is
            empty.
          </li>
          <li>
            If the stack is empty (MAX == -1), then Stack Underflows and we
            cannot remove any element from the stack.
          </li>
          <li>
            Otherwise, we store the value at TOS, decrement the value of MAX by
            1 (MAX = MAX - 1) and return the stored TOS value.
          </li>
        </ul>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240606180943/Pop-Operation-in-Stack-(1).webp"
          alt="Pop Operation in Stack"
          className="mx-auto my-4 h-[350px] w-[550px]"
        />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Tos or Peek Operation:
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          Returns the top element of the stack.
        </p>
        <h4 className="text-lg font-semibold mb-2">
          Algorithm for Peek Operation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            Before returning the top element from the stack, we check if the
            stack is empty.
          </li>
          <li>
            If the stack is empty (TOS == -1), we simply print "Stack is empty".
          </li>
          <li>Otherwise, we return the element stored at index = TOS.</li>
        </ul>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240606181023/Top-or-Peek-Operation-in-Stack-(1).webp"
          alt="Top or Peek Operation in Stack"
          className="mx-auto my-4 h-[350px] w-[550px]"
        />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          isEmpty Operation:
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          Returns true if the stack is empty, else false.
        </p>
        <h4 className="text-lg font-semibold mb-2">
          Algorithm for isEmpty Operation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Check if the stack is empty (TOS == -1).</li>
          <li>If true, return true.</li>
          <li>Otherwise, return false.</li>
        </ul>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240606181023/Top-or-Peek-Operation-in-Stack-(1).webp"
          alt="isEmpty Operation in Stack"
          className="mx-auto my-4 h-[350px] w-[550px]"
        />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          isFull Operation:
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          Returns true if the stack is full, else false.
        </p>
        <h4 className="text-lg font-semibold mb-2">
          Algorithm for isFull Operation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Check for the value of TOS in stack.</li>
          <li>If (TOS == MAX-1), then the stack is full so return true.</li>
          <li>Otherwise, the stack is not full so return false.</li>
        </ul>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240606181147/isFull-Operation-in-Stack-(1).webp"
          alt="isFull Operation in Stack"
          className="mx-auto my-4 h-[350px] w-[550px]"
        />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Implementation of Stack Data Structure:
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          The basic operations that can be performed on a stack include push,
          pop, and peek. There are two ways to implement a stack:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Using Array</li>
          <li>Using Linked List</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          In an array-based implementation, the push operation is implemented by
          incrementing the index of the top element and storing the new element
          at that index. The pop operation is implemented by returning the value
          stored at the top index and then decrementing the index of the top
          element.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          In a linked list-based implementation, the push operation is
          implemented by creating a new node with the new element and setting
          the next pointer of the current top node to the new node. The pop
          operation is implemented by setting the next pointer of the current
          top node to the next node and returning the value of the current top
          node.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Implementation of Stack Data Structure using Array:
        </h3>
        {/* Code and output would go here */}
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-semibold mb-2">
          Advantages of Array Implementation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Easy to implement</li>
          <li>Memory is saved as pointers are not involved.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-semibold mb-2">
          Disadvantages of Array Implementation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            It is not dynamic i.e., it doesn't grow and shrink depending on
            needs at runtime. [But in case of dynamic sized arrays like vector
            in C++, list in Python, ArrayList in Java, stacks can grow and
            shrink with array implementation as well].
          </li>
          <li>The total size of the stack must be defined beforehand.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Implementation of Stack Data Structure using Linked List:
        </h3>
        {/* Code and output would go here */}
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-semibold mb-2">
          Advantages of Linked List Implementation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            The linked list implementation of a stack can grow and shrink
            according to the needs at runtime.
          </li>
          <li>It is used in many virtual machines like JVM.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-semibold mb-2">
          Disadvantages of Linked List implementation:
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Requires extra memory due to the involvement of pointers.</li>
          <li>Random accessing is not possible in stack.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Complexity Analysis of Operations on Stack Data Structure:
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 p-2">Operations</th>
                <th className="border border-gray-300 p-2">Time Complexity</th>
                <th className="border border-gray-300 p-2">Space Complexity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  push()
                </td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  pop()
                </td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  tos() or peek()
                </td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  isEmpty()
                </td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  isFull()
                </td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
                <td className="border border-gray-300 p-2 text-center">O(1)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default StackBasic;
