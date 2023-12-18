import React from "react";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { RiMovie2Line } from "react-icons/ri";
import { PiTelevisionLight } from "react-icons/pi";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaImdb } from "react-icons/fa6";
import { LiaNewspaper } from "react-icons/lia";
import { MdLogin } from "react-icons/md";
import More from "./More";
function MobileBar() {
  return (
    <div className="px-10 items-center mt-1 bg-blue-900 w-full space-y-5">
      <div className='flex flex-col justify-center py-2 text-white' >
        <Link>
          <div className="flex space-x-2 hover:font-bold ">
            <span className="mt-1">
              <IoHomeOutline />
            </span>
            <span>Home</span>
          </div>
        </Link>
        <Link>
          <div className="flex space-x-2 hover:font-bold ">
            <span className="mt-1">
              <RiMovie2Line />
            </span>
            <span>Movies</span>
          </div>
        </Link>
        <Link>
          <div className="flex space-x-2 hover:font-bold ">
            <span className="mt-1">
              <PiTelevisionLight />
            </span>
            <span>Tv Shows</span>
          </div>
        </Link>
        {/* <Link>
          <div
            onClick={moreHandleClick}
            className="flex space-x-2 hover:font-bold relative "
          >
            <span className="mt-1">
              {more ? <MdKeyboardArrowUp /> : <MdOutlineExpandMore />}
            </span>
            More
            <span className="">{more ? <More /> : ""}</span>
          </div>
        </Link> */}
        <Link>
          <div className="flex space-x-2 hover:font-bold ">
            <span className="mt-1">
              <CiSettings />
            </span>
            <span>setting</span>
          </div>
        </Link>
        <Link>
          <div className="flex space-x-2 hover:font-bold ">
            <span className="mt-1">
              <IoIosInformationCircleOutline />
            </span>
            <span>information</span>
          </div>
        </Link>
        <Link>
          <div className="flex space-x-2 hover:font-bold ">
            <span className="mt-1">
              <FaImdb />
            </span>
            <span>IMDb Top 250 Movies</span>
          </div>
        </Link>
        <Link>
          <div className="flex space-x-2 hover:font-bold ">
            <span className="mt-1">
              <LiaNewspaper />
            </span>
            <span>Movie News</span>
          </div>
        </Link>
        <Link>
          <div className="flex space-x-2 hover:font-bold ">
            <span className="mt-1">
              <MdLogin />
            </span>
            <span>Login</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileBar;
