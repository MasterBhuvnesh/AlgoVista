import { useState } from "react";
import icon from "../assets/images/icon.png";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  HashtagIcon,
  InformationCircleIcon,
  ChartBarIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const search = [
  {
    name: "Linear Search",
    description:
      "Linear search doesn't require sorting as it works on unsorted data by sequentially checking each element.",
    href: "/searching/overviewlinear",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Binary Search",
    description:
      "Binary search divides a sorted list in half repeatedly to find a target value.",
    href: "/searching/overviewbinary",
    icon: MagnifyingGlassIcon,
  },
];
const hashing = [
  {
    name: "Overview",
    description:
      "Learn the prerequisites covering essential concepts and techniques required for hashing.",
    href: "/hashing/overview", // Set the href path
    icon: InformationCircleIcon,
  },
  {
    name: "Basics",
    description:
      "Gain a thorough understanding of the fundamental concepts of hashing and their terminology.",
    href: "/hashing/basic", // Set the href path
    icon: HashtagIcon,
  },
  {
    name: "Graphical Representation",
    description:
      "Understand how hashing function through visual representation.",
    href: "/hashing/graphical-representation", // Set the href path
    icon: FilmIcon,
  },
];
const graph = [
  {
    name: "Overview",
    description:
      "Learn the prerequisites covering essential concepts and techniques required for graph.",
    href: "/graph/overview", // Set the href path
    icon: InformationCircleIcon,
  },
  {
    name: "Basics",
    description:
      "Gain a thorough understanding of the fundamental concepts of graphs and their terminology.",
    href: "/graph/basic", // Set the href path
    icon: HashtagIcon,
  },
  {
    name: "Implementation & Traversal",
    description: "Utilizing DFS and BFS algorithms",
    href: "/graph/implementation", // Set the href path
    icon: ChartBarIcon,
  },
  {
    name: "Graphical Representation",
    description:
      "Understand how graphs function through visual representation.",
    href: "/graph/graphical-representation", // Set the href path
    icon: FilmIcon,
  },
];
const stack = [
  {
    name: "Overview",
    description:
      "Learn the prerequisites covering essential concepts and techniques required for stack.",
    href: "/stack/overview", // Set the href path
    icon: InformationCircleIcon,
  },
  {
    name: "Basics",
    description:
      "Gain a thorough understanding of the fundamental concepts of stacks and their terminology.",
    href: "/stack/basic", // Set the href path
    icon: HashtagIcon,
  },
  {
    name: "Graphical Representation",
    description:
      "Understand how stacks function through visual representation.",
    href: "/stack/graphical-representation", // Set the href path
    icon: FilmIcon,
  },
];
const linkedlist = [
  {
    name: "Overview",
    description:
      "Learn the prerequisites covering essential concepts and techniques required for linked list.",
    href: "/linkedlist/overview", // Set the href path
    icon: InformationCircleIcon,
  },
  {
    name: "Basics",
    description:
      "Gain a thorough understanding of the fundamental concepts of linked list and their terminology.",
    href: "/linkedlist/basic", // Set the href path
    icon: HashtagIcon,
  },
  {
    name: "Graphical Representation",
    description:
      "Understand how linked list function through visual representation.",
    href: "/linkedlist/graphical-representation", // Set the href path
    icon: FilmIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white font-poppins">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">AlgoVista</span>
            <img
              alt=""
              src={icon}
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="h-6 w-6"
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* Searching Algorithm */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 p-1">
                  Searching Algo
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {search.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
          {/* Hashing Methods & Function's */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 p-1">
                  Hashing
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {hashing.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
          {/* Stack */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 p-1">
                  Stack
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {stack.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
          {/* Linked List */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 p-1">
                  Linked List
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {linkedlist.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
          {/* Graph */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 p-1">
                  Graph
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {graph.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Algovista</span>
              <img
                alt=""
                src={icon}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="h-6 w-6"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure
                  as="div"
                  className="-mx-3"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Searching Algo
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...search].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="-mx-3"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Hashing
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...hashing].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="-mx-3"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Stack
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...stack].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="-mx-3"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Linked List
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...linkedlist].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="-mx-3"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Graph
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...graph].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
