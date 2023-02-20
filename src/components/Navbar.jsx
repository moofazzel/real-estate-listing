import Image from "next/image";
import Link from "next/link";

import logo_white from "../../public/logo_white.png";
import logo from "../../public//logo.svg";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/Ai";
import { FaBars, FaUser, FaCaretDown } from "react-icons/fa";

function Navbar() {
  const menuItems = (
    <>
      <Link
        className="navHover flex gap-[3px] items-center hover:text-main"
        href={"#"}
      >
        Home
        <FaCaretDown className="w-2" />
      </Link>
      <Link
        className="navHover flex gap-[3px] items-center hover:text-main"
        href={"#"}
      >
        Properties
        <FaCaretDown className="w-2" />
      </Link>
      <Link
        className="navHover flex gap-[3px] items-center hover:text-main"
        href={"#"}
      >
        Members
        <FaCaretDown className="w-2" />
      </Link>
      <Link
        className="navHover flex gap-[3px] items-center hover:text-main"
        href={"#"}
      >
        Pages
        <FaCaretDown className="w-2" />
      </Link>
      <Link
        className="navHover flex gap-[3px] items-center hover:text-main"
        href={"#"}
      >
        Contact
      </Link>
    </>
  );
  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-white xl:bg-transparent px-4 md:px-8 py-3.5 pt-5 fixed  top-0 z-50">
        <div className="flex justify-between items-center relative container">
          {/* Mobile menu button */}
          <button className="text-white bg-main p-2.5 text-2xl rounded xl:hidden hover:bg-red-600 transition-all ">
            <FaBars />
          </button>

          <Link href={"/"} className="flex justify-center items-center">
            <Image
              className="xl:hidden"
              width={150}
              height={47}
              src={logo}
              alt=""
            />
            <Image
              className="hidden xl:block"
              width={150}
              height={47}
              src={logo_white}
              alt=""
            />
          </Link>

          <div className="text-[#303030] lg:text-white xl:flex hidden items-center gap-6">
            <nav className="flex items-center gap-[3.5rem] text-base font-semibold">
              {menuItems}
            </nav>
            <div className="text-md flex gap-7 justify-between items-center">
              <div className="flex gap-1 items-center justify-center border-l-[1px] pl-5">
                <AiOutlineUser className="text-2xl" />
                <Link href={"#"} className="text-base">
                  Login/Register
                </Link>
              </div>
              <button className="flex gap-1.5 items-center px-[30px] py-3 rounded-full bg-white text-main  hover:bg-main hover:text-white hover:border-current transition-all duration-200">
                <AiOutlinePlus className=" text-xl " />
                <span className="text-sm font-bold">Submit Property</span>
              </button>
            </div>
          </div>

          {/* custom hamburger button */}

          {/* mobile menu user button */}

          <button className="text-2xl xl:hidden">
            <FaUser />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
