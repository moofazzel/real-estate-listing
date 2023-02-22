import Link from "next/link";
import { useForm } from "react-hook-form";

import { HiDotsVertical } from "react-icons/hi";

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
        <div className="text-center translate-y-80">
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
                <div className="flex lg:flex-col flex-row gap-4">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-3 px-5"
                    placeholder="Enter Search Keyword..."
                    {...register("keyword")}
                  />
                  <div className="action-location">
                    <input
                      type="text"
                      name="filter-center-location"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-3 px-5"
                      value=""
                      placeholder="Location"
                      autoComplete="off"
                    />
                  </div>

                  <div className="flex items-center gap-4 ">
                    <Link
                      className="flex items-center gap-3 text-base font-bold hover:text-main"
                      href={"#"}
                    >
                      Advanced <HiDotsVertical />
                    </Link>
                    <button
                      className="bg-main text-base font-bold text-white px-8 py-2.5 rounded-lg border border-white hover:bg-white hover:border  hover:text-main hover:border-main transition-all duration-300"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
