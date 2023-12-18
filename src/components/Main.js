import React from "react";
import SideBar from "./SideBar";

function Main({ showMovie }) {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-3/12">
        <SideBar />
      </div>
      <div className="w-8/12 mx-auto md:w-9/12 md:flex md:justify-end md:items-end">
        <div className="md:flex md:flex-wrap">{showMovie}</div>
      </div>
    </div>
  );
}

export default Main;


//md:w-9/12 md:right-0 md:flex flex-col justify-center items-center