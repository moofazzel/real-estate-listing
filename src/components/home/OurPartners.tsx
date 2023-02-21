import Image from "next/image";
import Slider from "react-slick";
import Title from "../shared/Title";

function OurPartners() {
  const partnersData = [
    {
      icon: "/assets/images/partners/brand01.png",
    },
    {
      icon: "/assets/images/partners/brand06.png",
    },
    {
      icon: "/assets/images/partners/brand03.png",
    },
    {
      icon: "/assets/images/partners/brand04.png",
    },
    {
      icon: "/assets/images/partners/brand05.png",
    },
  ];

  var settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,

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
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
    ],
    // fade: true,
  };

  return (
    <>
      <div className="bg-white py-12">
        <div className="container px-6 mx-auto">
          <Title title="Our Partners" />
          <p className="text-center">
            We only work with the best companies around the globe
          </p>

          <div className=" mt-8">
            <Slider {...settings}>
              {partnersData.map((d) => {
                return (
                  <div className=" pt-10 pb-9 px-11 ">
                    <Image width={106} height={75} src={d.icon} alt="" />
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

export default OurPartners;
