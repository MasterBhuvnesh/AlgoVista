import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../sidebar/stacksidebar";

const Stack = () => {
  return (
    <div className="flex">
      {/* Sidebar navigation */}
      <SideNav />

      {/* Main content for the sub-routes */}
      <div className="flex-1 p-6">
        <Outlet /> {/* This will render the sub-route content */}
      </div>
    </div>
  );
};

export default Stack;
