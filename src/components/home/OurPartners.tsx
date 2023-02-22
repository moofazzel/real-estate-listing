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
    speed: 2000,
    slidesToShow: 5,

    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: true,
          slidesToShow: 2,
          arrows: true,
        },
      },
    ],
    // fade: true,
  };

  return (
    <>
      <div className="bg-white py-12">
        <div className="lg:container px-6 mx-auto">
          <Title title="Our Partners" />
          <p className="text-center">
            We only work with the best companies around the globe
          </p>

          <div className=" mt-8">
            <Slider {...settings}>
              {partnersData.map((d) => {
                return (
                  <div className="relative">
                    <Image
                      className="aspect-[6/6] mx-auto"
                      width={106}
                      height={106}
                      quality={100}
                      src={d.icon}
                      alt=""
                    />
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
