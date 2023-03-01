import Link from "next/link";
import { HiDotsVertical } from "react-icons/hi";
import { useForm } from "react-hook-form";
import SelectDropdown from "../shared/SelectDropdown";
import AdvancedFilter from "./AdvancedFilter";
import { useState } from "react";

function FilterBox() {
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => console.log(data);

  const propertyOptions = [
    { value: "apartment", label: "Apartment" },
    { value: "condo", label: "Condo" },
    { value: "familyHouse", label: "Family House" },
    { value: "modern Vila", label: "Modern Vila" },
    { value: "townHouse", label: "Town House" },
  ];

  const roomOptions = [
    { value: "1", label: "1+" },
    { value: "2", label: "2+" },
    { value: "3", label: "3+" },
    { value: "4", label: "4+" },
    { value: "5", label: "5+" },
  ];

  return (
    <>
      <div className="px-4 lg:px-0">
        <div className="bg-[#ffffff33] p-4 rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-5 rounded-lg relative"
          >
            <div className="flex flex-col lg:flex-row gap-4 ">
              <input
                type="text"
                id="first_name"
                className=" w-full lg:w-[25%] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:border-0 block p-4 px-5 focus-visible:outline-blue-500"
                placeholder="Enter Search Keyword..."
                {...register("keyword")}
              />

              <div className="lg:w-[25%]">
                <SelectDropdown
                  placeholder={"Property Type"}
                  selectedOptions={propertyOptions}
                />
              </div>

              <input
                type="text"
                id="location"
                className=" w-full lg:w-[25%] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:border-0 focus-visible:outline-blue-500 block p-4 px-5"
                placeholder="location"
                {...register("location")}
              />

              <div className="lg:w-[25%]">
                <SelectDropdown
                  placeholder={"Rooms"}
                  selectedOptions={roomOptions}
                />
              </div>

              <div
                onClick={() => setVisible(!visible)}
                className="flex lg:w-[25%] items-center gap-4 "
              >
                <button className="flex items-center gap-3 text-base font-bold hover:text-main">
                  Advanced <HiDotsVertical />
                </button>
                <button
                  className="bg-main text-base font-bold text-white px-8 py-2.5 rounded-lg border-2 border-white hover:bg-white hover:border-2 hover:text-main hover:border-main transition-all duration-300"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
            <>
              <div
                className={` ${
                  visible
                    ? "h-80 overflow-hidden opacity-100"
                    : "h-0 opacity-75 overflow-hidden"
                } container absolute left-0 mt-12 lg:top-20 transition-all duration-700`}
              >
                {<AdvancedFilter />}
              </div>
            </>
          </form>
        </div>
      </div>
    </>
  );
}

export default FilterBox;
