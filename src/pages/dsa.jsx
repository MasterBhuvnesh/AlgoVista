import stack from "../assets/images/stack.png";
import linkedlist from "../assets/images/linkedlist.png";
import graph from "../assets/images/graph.png";
import hashfn from "../assets/images/hashing.png";
const products = [
  {
    id: 1,
    name: "Stack",
    href: "/stack/aim",
    imageSrc: stack,
    imageAlt: "DATA STRUCTURE - Stack",
    description:
      "A stack is a linear data structure that follows the principle of Last In First Out. This means the last element inserted inside the stack is removed first.",
  },
  {
    id: 2,
    name: "Linked List",
    href: "/linkedlist/aim",
    imageSrc: linkedlist,
    imageAlt: "DATA STRUCTURE - Linked Lists",
    description:
      "A linked list is a linear data structure that includes a series of connected nodes. Here, each node stores the data and the address of the next node. ",
  },
  {
    id: 3,
    name: "Graph",
    href: "/graph/aim",
    imageSrc: graph,
    imageAlt: "DATA STRUCTURE - Graph",
    description:
      "A graph data structure is a collection of nodes that have data and are connected to other nodes.",
  },
  {
    id: 4,
    name: "Hashing",
    href: "/hashing/aim",
    imageSrc: hashfn,
    imageAlt: "Hashing using hashing function",
    description:
      "A hashing function is an algorithm that takes input data and maps it to a fixed-size hash value or code, used for quick data lookups.",
  },
];

export default function DSA() {
  return (
    <div className="bg-white font-poppins">
      <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 py-4">
          Learn About DSA concepts
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
