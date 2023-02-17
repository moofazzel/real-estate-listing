import Image from "next/image";
import Link from "next/link";

import logo_white from "../../public/logo_white.png";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/Ai";

function Navbar() {
  const menuItems = (
    <>
      <Link className="navHover" href={"#"}>
        Home
      </Link>
      <Link className="navHover" href={"#"}>
        Properties
      </Link>
      <Link className="navHover" href={"#"}>
        Members
      </Link>
      <Link className="navHover" href={"#"}>
        Pages
      </Link>
      <Link className="navHover" href={"#"}>
        Contact
      </Link>
    </>
  );
  return (
    <>
      {/* Navbar */}
      <div className="bg-blue-200 px-4 md:px-8 border-b-2 mb-4 py-3.5 pt-5 sticky top-0 z-50">
        <div className="flex justify-between items-center relative container">
          <Link href={"/"} className="flex justify-center items-center">
            <Image width={150} height={47} src={logo_white} alt="" />
          </Link>

          <div className=" flex items-center gap-6">
            <nav className="text-base font-semibold text-[#303030] space-x-[3.7rem] hidden lg:block ">
              {menuItems}
            </nav>
            <div className="text-md xl:text-xl  hidden lg:flex gap-7 justify-between items-center">
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

          {/* mobile menu */}
          <div
            className={`  absolute  flex gap-3 flex-col text-md text-[#303030]  lg:hidden bg-white w-full py-5 px-5 border-b-4 transition-all duration-500`}
          >
            {menuItems}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
