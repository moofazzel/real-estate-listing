import RangeSlider from "../shared/rangeSlider/RangeSlider";
import SelectDropdown from "../shared/SelectDropdown";

function AdvancedFilter() {
  const bathOptions = [
    { value: "1", label: "1+" },
    { value: "2", label: "2+" },
    { value: "3", label: "3+" },
    { value: "4", label: "4+" },
    { value: "5", label: "5+" },
  ];

  const advanceOptions = [
    "Air Conditioning",
    "Balcony",
    "Garden",
    "Pool",
    "Gym",
    "Parking",
    "Elevator",
    "Furnished",
    "Pet Friendly",
    "Laundry",
    "Storage",
    "Wheelchair Access",
    "Window Coverings",
    "Fireplace",
    "Tv Cable",
  ];

  return (
    <>
      <div className="bg-white rounded-lg py-8  shadow-xl z-50">
        {/* select multiple */}
        <div className="px-5">
          <ul
            className="text-sm text-left text-gray-700 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 "
            aria-labelledby="dropdownSearchButton"
          >
            {advanceOptions.map((option, i) => (
              <li key={i} className="">
                <>
                  <label
                    htmlFor={`checkbox-${i}`}
                    className="w-full ml-2 text-base font-normal text-slate-400 focus:text-main cursor-pointer"
                  >
                    <input
                      id={`checkbox-${i}`}
                      type="checkbox"
                      value=""
                      className="w-[15px] h-[15px] mr-2.5 accent-main focus:text-main cursor-pointer"
                    />
                    {option}
                  </label>
                </>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-7" />
        {/* Dropdown select */}
        <div className="mx-5 mt-5 lg:mt-0 grid grid-cols-1 lg:grid-cols-4 gap-3">
          <div>
            <SelectDropdown
              placeholder={"Baths : Any"}
              selectedOptions={bathOptions}
            />
          </div>
          <div>
            <SelectDropdown
              placeholder={"Beds : Any"}
              selectedOptions={bathOptions}
            />
          </div>

          <div>
            <RangeSlider
              SYMBOL={""}
              TITLE={"Home Area (Sqft)"}
              MIN={0}
              MAX={550}
            />
          </div>

          <div>
            <RangeSlider
              SYMBOL={"$"}
              TITLE={"Home Area (Sqft)"}
              MIN={0}
              MAX={50000}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedFilter;
