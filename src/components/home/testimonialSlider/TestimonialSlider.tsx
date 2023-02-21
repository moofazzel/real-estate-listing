import Image from "next/image";
import cl1 from "../../../../public/assets/testimonial-sl-image/cl1.png";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <div className="text-center ">
            {/* slider image */}
            <div className="flex justify-center">
              <Image
                src={cl1}
                alt="Client image"
                className="w-[110px] h-[110px] rounded-full border-[4px] border-white border_shadow"
              />
            </div>
            {/* slider text */}
            <div className="p-5 mx-auto md:max-w-2xl">
              <p className="text-base text-dark font-normal">
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt
              </p>
            </div>
            {/* slider icon */}
            <span className="text-main text-2xl text-center flex justify-center pb-5 pt-2">
              <FaQuoteLeft />
            </span>

            {/* slider title and subtitle */}
            <div className="">
              <h3 className="text-gray-800 font-semibold text-[22px]">
                Richard Jackson
              </h3>
              <span className="text-[16px] text-gray-800 font-normal mb-3">
                Sales Manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
