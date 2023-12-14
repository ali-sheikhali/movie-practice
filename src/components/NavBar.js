import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function NavBar() {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(!bar);
  };
  return (
    <div>
      <div className="flex justify-around bg-blue-900 py-2">
        <div className="w-[100px]">
          <Link path="/">
          <img
            className="rounded-md"
            src={require("../img/tmdb.png")}
            alt="logo"
          />
          </Link>
        </div>
        <form action="" className="md:w-4/12">
            
            <input type="text" className="rounded-md py-1 px-3 mt-3 md:w-full" placeholder="search..."/>
        </form>
        <div className="cursor-pointer text-white text-3xl mt-3">
          <span onClick={handleClick}>
            {bar ? <IoMdClose /> :  <FaBars />}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
