import Title from "@/components/shared/Title";
import SingleProperty from "@/components/singleProperty/SingleProperty";
import Slider from "react-slick";

import sliderImg from "../../../../public/assets/images/properties/sl1.jpg";
import sliderImg2 from "../../../../public/assets/images/properties/sl2.jpg";
import sliderImg3 from "../../../../public/assets/images/properties/sl3.jpg";
import sliderImg4 from "../../../../public/assets/images/properties/sl4.jpg";
import sliderImg5 from "../../../../public/assets/images/properties/sl5.jpg";

import agentImage from "../../../../public/assets/images/agents/ag2.png";

const PropertySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "50px",
    adaptiveHeight: true,
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

  const featuredProperties = [
    {
      title: "North Dillard Street",
      type: "Condo",
      image: sliderImg,
      price: "$1,200,000",
      location: "Miami, Florida",
      area: "1,200 sq ft",
      beds: "4",
      baths: "2",
      status: "For Sale",
      advertised: "Featured",
      posted: "2 days ago",
      profile: [{ name: "John Doe", image: agentImage }],
    },
    {
      title: "Eaton Garth Penthouse",
      type: "Apertment",
      image: sliderImg2,
      price: "7500 ",
      location: "25-25 Broadway, Astoria",
      area: "220 sq ft",
      beds: "4",
      baths: "2",
      status: "For Rent",
      // advertised: "Featured",
      posted: "45 min ago",
      profile: [{ name: "Jakio Sultana", image: agentImage }],
    },
    {
      title: "Skyper Pool Apartment",
      type: "Apertment",
      image: sliderImg3,
      price: "7500 ",
      location: "25-25 Broadway, Astoria",
      area: "220 sq ft",
      beds: "4",
      baths: "2",
      status: "For Rent",
      // advertised: "Featured",
      posted: "45 min ago",
      profile: [{ name: "Jakio Sultana", image: agentImage }],
    },
    {
      title: "Villa With Pool",
      type: "Town House",
      image: sliderImg4,
      price: "7500 ",
      location: "25-25 Broadway, Astoria",
      area: "220 sq ft",
      beds: "4",
      baths: "2",
      status: "For Rent",
      advertised: "Featured",
      posted: "45 min ago",
      profile: [{ name: "Jakio Sultana", image: agentImage }],
    },
    {
      title: "Eaton Garth Penthouse",
      type: "Apertment",
      image: sliderImg5,
      price: "7500 ",
      location: "25-25 Broadway, Astoria",
      area: "220 sq ft",
      beds: "4",
      baths: "2",
      status: "For Rent",
      // advertised: "Featured",
      posted: "45 min ago",
      profile: [{ name: "Jakio Sultana", image: agentImage }],
    },
  ];

  return (
    <>
      <Title title="Featured Properties" />
      <p className="text-center mb-5">Handpicked properties by our team</p>

      <Slider {...settings}>
        {featuredProperties.map((featuredProperty) => (
          <div className="hover:shadow-md">
            <SingleProperty featuredProperty={featuredProperty} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PropertySlider;
