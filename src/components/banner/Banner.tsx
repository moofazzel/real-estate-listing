import { useForm } from "react-hook-form";

function Banner() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => console.log(data);

  return (
    <>
      <div className=" heroBanner h-[42rem] w-full ">
        <div className="text-center translate-y-96">
          <h1 className="text-white text-3xl xl:text-6xl font-bold">
            Find Your Dream Home
          </h1>

          <p className="text-white text-lg font-bold pb-2 rounded-lg">
            From as low as $10 per day with limited time offer discounts
          </p>

          {/* Filter part */}

          <div className="containers px-10">
            <div className="bg-[#ffffff33] p-3 rounded-lg">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-5 rounded-lg "
              >
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-3 px-5"
                    placeholder="Enter Search Keyword..."
                    {...register("keyword")}
                  />
                </div>

                <input type="Search" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
