import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";

import sliderImg from "../../../../public/sl2.jpg";

const FeaturedProperties = () => {
  return (
    <section className=" py-14 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-300 rounded">
            <Image
              src={sliderImg}
              alt="it's a slider image"
              width={280}
              height={280}
            />
            {/* card body */}
            <div className=" p-4 ">
              {/* property title */}
              <h3 className="text-lg font-medium text-dark my-3">
                Diamond Mentor apartment
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
                  <span className="w-[60px] h-[60px] rounded-full bg-teal-500 mr-3"></span>
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
