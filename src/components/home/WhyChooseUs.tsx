import Image from "next/image";
import Slider from "react-slick";
import Title from "../shared/Title";

function WhyChooseUs() {
  const whyData = [
    {
      icon: "assets/icons/high-five.png",
      title: "Trusted By Thousands",
      desc: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris urna dignissim donec vel lectus vel felis.",
    },
    {
      icon: "assets/icons/high-five.png",
      title: "Wide Renge Of Properties",
      desc: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris urna dignissim donec vel lectus vel felis.",
    },
    {
      icon: "assets/icons/high-five.png",
      title: "Financing Made Easy",
      desc: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris urna dignissim donec vel lectus vel felis.",
    },
  ];

  var settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,

    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
    // fade: true,
  };

  return (
    <>
      <div className="bg-bgGrey py-12">
        <div className="container px-6 mx-auto">
          <Title title="Why Choose Us" />
          <p className="text-center">We provide full service at every step</p>

          <div className=" mt-8">
            <Slider {...settings}>
              {whyData.map((d) => {
                return (
                  <div className="bg-white pt-10 pb-9 px-11 rounded-[10px] shadow-md shadow-slate-100 border-2 border-slate-200 hover:bg-main group transition-all duration-500">
                    <div className=" bg-[#FFE8E9] group-hover:bg-white p-10 rounded-full w-fit mx-auto">
                      <Image
                        width={130}
                        height={130}
                        src="/assets/icons/high-five.png"
                        alt=""
                      />
                    </div>
                    <div className="text-center mt-8">
                      <h3 className="text-lg font-bold mb-4 group-hover:text-white transition-all duration-300">
                        Trusted By Thousands
                      </h3>
                      <p className="text-titleColor text-sm leading-6 group-hover:text-white transition-all duration-300">
                        Aliquam dictum elit vitae mauris facilisis at dictum
                        vitae mauris urna dignissim donec vel lectus vel felis.
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
