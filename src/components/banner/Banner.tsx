import banner1 from "../../../public/slider1.jpg";

function Banner() {
  return (
    <>
      <div className=" heroBanner h-52 w-screen">This is banner</div>
    </>
  );
}

export default Banner;
function Banner() {
  return (
    <>
      <div className=" heroBanner h-screen w-full flex justify-center items-center ">
        <div className="text-center">
          <h1 className="text-white text-6xl font-bold">
            Find Your Dream Home
          </h1>
          <p className="text-white text-lg font-bold">
            From as low as $10 per day with limited time offer discounts
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
