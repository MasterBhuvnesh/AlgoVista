import { ChevronRightIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Efficiency & Optimization",
    description:
      "DSA optimizes time, space, and performance in solving problems.",
    icon: ChevronRightIcon,
  },
  {
    name: "Problem-Solving Framework",
    description:
      "It provides methods to break down and solve complex issues efficiently.",
    icon: ChevronRightIcon,
  },
  {
    name: "Foundation of Software Development",
    description:
      "DSA is crucial for building scalable, robust, and efficient software.",
    icon: ChevronRightIcon,
  },
  {
    name: "Crucial for Interviews",
    description:
      "Mastery of DSA is critical for success in technical coding interviews.",
    icon: ChevronRightIcon,
  },
];

export default function Hero() {
  return (
    <div className="bg-white py-20 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn Data Structures and Algorithms
          </p>
          <p className="mt-6 text-base leading-8 text-gray-600">
            Data Structures and Algorithms is an essential skill for any
            programmer looking to solve problems efficiently. Understanding and
            utilizing DSA is especially important when optimization is crucial,
            like in game development, live video apps, and other areas where
            even a one-second delay can impact performance.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
