import FilterBox from "./FilterBox";

function Banner() {
  return (
    <>
      <div className=" heroBanner h-[58rem] lg:h-[45rem] w-full ">
        <div className="text-center translate-y-72">
          <h1 className="text-white text-3xl xl:text-6xl font-bold mb-5">
            Find Your Dream Home
          </h1>

          <p className="text-white text-lg font-bold pb-2 rounded-lg mb-10">
            From as low as $10 per day with limited time offer discounts
          </p>

          {/* Filter part */}
          <div className="container">
            <FilterBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
