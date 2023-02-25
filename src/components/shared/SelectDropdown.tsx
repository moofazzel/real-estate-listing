import React, { useState } from "react";
import Select from "react-select";

export default function SelectDropdown({ selectedOptions, placeholder }: any) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        isClearable
        onChange={setSelectedOption}
        options={selectedOptions}
        placeholder={placeholder}
      />
    </>
  );
}
