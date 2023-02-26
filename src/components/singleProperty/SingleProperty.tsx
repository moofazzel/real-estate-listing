import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";

import { RiHeart2Line } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import Link from "next/link";

const SingleProperty = ({ featuredProperty }) => {
  const {
    title,
    type,
    image,
    price,
    location,
    area,
    beds,
    baths,
    status,
    advertised,
    posted,
    profile,
  } = featuredProperty;
  return (
    <div className="border border-gray-300 rounded-lg">
      <div className="m-3 relative rounded-md z-10">
        <div className="relative">
          <Image
            src={image}
            className="rounded-lg cursor-pointer"
            alt="it's a slider image"
          />
        </div>
        <div className="before:content-['*'] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-slate-600 before:opacity-[0.5] before:rounded-md "></div>
        <div className="absolute top-3 left-3">
          <div className="flex items-center">
            <button className="py-1.5 px-3 bg-[#3e4c66] text-sm rounded-md text-white mr-3">
              {status}
            </button>
            {advertised && (
              <button className="py-1.5 px-3 bg-main text-sm rounded-md text-white">
                Featured
              </button>
            )}
          </div>
        </div>

        <div className="absolute w-full h-full px-[18px] top-[78%]">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-[22px] text-white font-semibold capitalize">
              $ {price}
            </h3>
            <div className="flex items-center">
              <button className="bg-[#11111193] p-2 text-white text-xl rounded-md mr-2 hover:bg-main transition-all duration-300">
                <RiHeart2Line />
              </button>
              <button className="bg-[#11111193] p-2 text-white text-xl rounded-md hover:bg-main transition-all duration-300">
                <BiTransfer />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card body */}
      <div className=" px-4 py-2">
        {/* property type */}
        <span className="text-sm font-normal text-main mb-3">{type}</span>
        {/* property title */}
        <h3 className="text-lg font-medium text-dark mb-3 hover:text-main transition-all cursor-pointer">
          {title}
        </h3>
        {/* address */}
        <div className="flex items-center">
          <span className="text-xl mr-3">
            <TfiLocationPin />
          </span>
          <span className="text-sm font-normal text-gray-800 hover:text-main transition-all cursor-pointer">
            {location}
          </span>
        </div>
        {/* amenities */}
        <div className="flex items-center my-3">
          <span className="text-sm font-normal text-gray-800 mr-3">
            Beds : {beds}
          </span>
          <span className="text-sm font-normal text-gray-800 mr-3">
            Baths : {baths}
          </span>
          <span className="text-sm font-normal text-gray-800 mr-3">
            Sqft : {area}
          </span>
        </div>
      </div>
      {/* card footer */}
      <div className="border-t border-gray-300 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* agent image */}
            <Image
              src={profile[0].image}
              width={45}
              height={45}
              alt="Agent photo"
              className="w-[45px] h-[45px] rounded-full mr-3"
            />

            <span className="text-sm font-normal text-gray-800 mr-3">
              {profile[0].name}
            </span>
          </div>
          <span className="text-sm font-normal text-gray-800 mr-3">
            {posted}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
