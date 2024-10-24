import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/graph/aim", label: "Aim" },
    { path: "/graph/overview", label: "Overview" },
    { path: "/graph/quiz/1", label: "Pre Test", id: 1 },
    { path: "/graph/basic", label: "Basic" },
    { path: "/graph/implementation", label: "Implementation" },
    { path: "/graph/traversal", label: "Traversal" },
    { path: "/graph/quiz/2", label: "Post Test", id: 2 },
    {
      path: "/graph/graphical-representation",
      label: "Graphical Representation",
    },
  ];

  return (
    <div className="flex font-poppins">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 min-h-screen transition-all duration-300">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold transition-all duration-300">
            Graph
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-500 hover:bg-gray-600 text-white p-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>

        <nav className="mt-5">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`ml-2 mr-2 block px-4 py-2 rounded transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
