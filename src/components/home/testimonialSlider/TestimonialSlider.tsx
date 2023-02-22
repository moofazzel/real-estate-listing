import Image from "next/image";
import cl1 from "../../../../public/assets/testimonial-sl-image/cl1.png";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // fade: true,
  };
  return (
    <section className="py-14 lg:py-20 bg-gray-50">
      <div className="container mx-auto">
        <Slider {...settings}>
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
              <div className="p-7 mb-6 mt-8 mx-auto bg-white md:max-w-xl rounded-md relative arrow_top shadow-lg shadow-gray-100">
                <p className="text-[15px]  text-[#484848] font-normal">
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
              <div className="p-7 mb-6 mt-8 mx-auto bg-white md:max-w-xl rounded-md relative arrow_top shadow-lg shadow-gray-100">
                <p className="text-[15px]  text-[#484848] font-normal">
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
              <div className="p-7 mb-6 mt-8 mx-auto bg-white md:max-w-xl rounded-md relative arrow_top shadow-lg shadow-gray-100">
                <p className="text-[15px]  text-[#484848] font-normal">
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
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
