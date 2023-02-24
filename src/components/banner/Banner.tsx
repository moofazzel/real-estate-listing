import FilterBox from "./FilterBox";

function Banner() {
  return (
    <>
      <div className=" heroBanner h-[55rem] w-full ">
        <div className="text-center translate-y-80">
          <h1 className="text-white text-3xl xl:text-6xl font-bold">
            Find Your Dream Home
          </h1>

          <p className="text-white text-lg font-bold pb-2 rounded-lg">
            From as low as $10 per day with limited time offer discounts
          </p>

          {/* Filter part */}
          <FilterBox />
        </div>
      </div>
    </>
  );
}

export default Banner;
