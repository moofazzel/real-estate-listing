import Link from "next/link";
import { HiDotsVertical } from "react-icons/hi";
import { useForm } from "react-hook-form";
import SelectedDropdown from "../shared/SelectDropdown";

function FilterBox() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => console.log(data);

  const propertyOptions = [
    { value: "1", label: "1+" },
    { value: "2", label: "2+" },
    { value: "3", label: "3+" },
    { value: "4", label: "4+" },
    { value: "5", label: "5+" },
  ];

  return (
    <>
      <div className="containers px-10">
        <div className="bg-[#ffffff33] p-4 rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-5 rounded-lg "
          >
            <div className="flex flex-col lg:flex-row gap-4 ">
              <input
                type="text"
                id="first_name"
                className="lg:w-1/4 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:border-0 block w-full p-4 px-5"
                placeholder="Enter Search Keyword..."
                {...register("keyword")}
              />

              <SelectedDropdown
                placeholder={"Property Type"}
                selectedOptions={propertyOptions}
              />

              <div className="action-location">
                <input
                  type="text"
                  name="filter-center-location"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:border-0 block w-full p-4 px-5"
                  value=""
                  placeholder="Location"
                  autoComplete="off"
                />
              </div>

              <SelectedDropdown
                placeholder={"Rooms"}
                selectedOptions={propertyOptions}
              />

              <div className="lg:w-1/4 flex items-center gap-4 ">
                <Link
                  className="flex items-center gap-3 text-base font-bold hover:text-main"
                  href={"#"}
                >
                  Advanced <HiDotsVertical />
                </Link>
                <button
                  className="bg-main text-base font-bold text-white px-8 py-2.5 rounded-lg border-2 border-white hover:bg-white hover:border-2 hover:text-main hover:border-main transition-all duration-300"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FilterBox;
