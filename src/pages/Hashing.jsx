import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../sidebar/hashingsidebar";

const Hashing = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Hashing;
