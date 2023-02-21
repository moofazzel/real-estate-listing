import Title from "../shared/Title";
import Image from "next/image";

import florida from "../../../public/assets/images/cities/florida.jpg";
import los from "../../../public/assets/images/cities/los.jpg";
import miami from "../../../public/assets/images/cities/miami.jpg";
import newyork from "../../../public/assets/images/cities/newyork.jpg";
import Link from "next/link";

console.log(miami.src);

function PropertiesByCities() {
  interface PropertiesAndCities {
    image: object;
    city: string;
    properties: number;
  }
  const propertiesByCities: PropertiesAndCities[] = [
    {
      image: miami,
      city: "Gulsan",
      properties: 4,
    },
    {
      image: los,
      city: "Banani",
      properties: 7,
    },
    {
      image: newyork,
      city: "baridhara",
      properties: 4,
    },
    {
      image: florida,
      city: "dhanmondi",
      properties: 4,
    },
  ];
  return (
    <>
      <div className="bg-white my-10 shadow">
        <div className="container px-6">
          <div className="text-center mb-5">
            <Title title={"Find Properties in These Cities"} />
            <p>Find your desire house in popular cities</p>
          </div>
          <div className="flex gap-3 md:gap-5 flex-wrap [&>*]:!w-full propertiesByCities">
            {propertiesByCities.map((city, i) => {
              return (
                <Link
                  href={"#"}
                  key={i}
                  className="flex justify-center items-end rounded-xl overflow-hidden transition-all duration-500 group h-[250px] xl:h-[350px] "
                  style={{
                    backgroundImage: "url(" + city.image.src + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100%",
                  }}
                >
                  <div className="w-full h-1/2 flex flex-col justify-end items-center pb-5 text-center text-white bg-gradient-to-t from-[#1D293E] group-hover:pb-8 transition-all duration-500">
                    <h4 className="text-lg font-bold ">{city.city}</h4>
                    <p className="text-xs font-bold">
                      {city.properties} Properties
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertiesByCities;
