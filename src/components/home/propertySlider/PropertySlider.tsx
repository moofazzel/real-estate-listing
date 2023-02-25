import Title from "@/components/shared/Title";
import SingleProperty from "@/components/singleProperty/SingleProperty";
import Slider from "react-slick";

const PropertySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "50px",

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
          slidesToShow: 2,
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
    <>
      <Title title="Featured Properties" />
      <p className="text-center mb-5">Handpicked properties by our team</p>

      <Slider {...settings}>
        <SingleProperty />
        <SingleProperty />
        <SingleProperty />
        <SingleProperty />
        <SingleProperty />
        <SingleProperty />
      </Slider>
    </>
  );
};

export default PropertySlider;
