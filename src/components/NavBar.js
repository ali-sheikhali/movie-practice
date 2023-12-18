import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileBar from "./MobileBar";


function NavBar() {
  const [bar, setBar] = useState(false);

  const handleClick = () => {
    setBar(!bar);
  };
  return (
    <div>
      <div className="flex justify-around bg-blue-900 py-4">
        <div className="w-[100px]">
          <Link path="/">
            <img
              className="rounded-md mt-2"
              src={require("../img/tmdb.png")}
              alt="logo"
            />
          </Link>
        </div>
        <form action="" className="flex md:w-5/12">
          <input
            type="text"
            className="rounded-l-md py-1 px-3 mt-3 md:w-full focus:outline-none"
            placeholder="search..."
          />
          <button
            type="submit"
            className="bg-green-500 mt-3 rounded-r-md px-2 text-white"
          >
            search
          </button>
        </form>
        <div className="cursor-pointer md:hidden text-white text-3xl mt-5">
          <span onClick={handleClick}>{bar ? <IoMdClose /> : <FaBars />}</span>
        </div>
      </div>
      <div className="transition-all ease-linear duration-300 " >
      {bar && <MobileBar /> }
      </div>
    </div>
  );
}

export default NavBar;
