import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import error from "../../public/assets/error.png";

function ErrorPage() {
  return (
    <>
      <div className="bg-[#f7f7f7] flex flex-col justify-center items-center">
        <Image className="max-w-[80%] " src={error} alt="error" />
        <h4
          className="text-5xl font-bold mt-5 mb-3
        "
        >
          404
        </h4>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed, name changed or is temporarity unavailable.
        </p>
        <div className="w-96 bg-white flex justify-between items-center border border-slate-300 rounded-md mt-7">
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="w-full bg-transparent focus-visible:outline-none text-[#484848] py-[7px] px-5"
          />
          <span className="py-[10px] px-4">
            <button type="submit" className="">
              <BsSearch className="text-xl hover:fill-main transition-all duration-300" />
            </button>
          </span>
          <input
            type="hidden"
            name="post_type"
            value="post"
            className="post_type focus:outline-0"
          />
        </div>
        <Link
          href={"/"}
          className="bg-main text-xs text-white font-bold py-3 px-7 my-7 rounded-md cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
