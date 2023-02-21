import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
import sliderImg from "../../../../public/assets/properties/sl2.jpg";
import agentImage from "../../../../public/assets/agents/ag1.jpg";
import { RiHeart2Line } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";

const FeaturedProperties = () => {
  return (
    <section className=" py-14 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-300 rounded">
            <div className="m-3 relative rounded-md z-10">
              <Image
                src={sliderImg}
                alt="it's a slider image"
                className="w-full  rounded-md"
              />
              <div className="before:content-['*'] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-slate-600 before:opacity-[0.5] before:rounded-md "></div>
              <div className="absolute top-3 left-3">
                <div className="flex items-center">
                  <button className="py-1.5 px-3 bg-[#3e4c66] text-sm rounded-md text-white mr-3">
                    For Rent
                  </button>
                  <button className="py-1.5 px-3 bg-main text-sm rounded-md text-white">
                    Featured
                  </button>
                </div>
              </div>

              <div className="absolute w-full h-full px-[18px] top-[78%]">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-[22px] text-white font-semibold capitalize">
                    $ 2202
                  </h3>
                  <div className="flex items-center">
                    <button className="bg-[#11111193] p-2 text-white text-xl rounded-md mr-2">
                      <RiHeart2Line />
                    </button>
                    <button className="bg-[#11111193] p-2 text-white text-xl rounded-md">
                      <BiTransfer />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* card body */}
            <div className=" px-4 py-2">
              {/* property type */}
              <span className="text-sm font-normal text-main mb-3">
                Apartment
              </span>
              {/* property title */}
              <h3 className="text-lg font-medium text-dark mb-3">
                Diamond Mentor jlsdjkhgd
              </h3>
              {/* address */}
              <div className="flex items-center">
                <span className="text-xl mr-3">
                  <TfiLocationPin />
                </span>
                <span className="text-sm font-normal text-gray-800">
                  25-25 Broadway, Astoria
                </span>
              </div>
              {/* amenities */}
              <div className="flex items-center my-3">
                <span className="text-sm font-normal text-gray-800 mr-3">
                  {" "}
                  Beds : 3
                </span>
                <span className="text-sm font-normal text-gray-800 mr-3">
                  {" "}
                  Baths : 2
                </span>
                <span className="text-sm font-normal text-gray-800 mr-3">
                  {" "}
                  Sqft : 150
                </span>
              </div>
            </div>
            {/* card footer */}
            <div className="border-t border-gray-300 px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* agent image */}
                  <Image
                    src={agentImage}
                    alt="Agent photo"
                    className="w-[45px] h-[45px] rounded-full mr-3"
                  />

                  <span className="text-sm font-normal text-gray-800 mr-3">
                    John Doe
                  </span>
                </div>
                <span className="text-sm font-normal text-gray-800 mr-3">
                  3 years ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
