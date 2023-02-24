import React, { useState } from "react";
import Select from "react-select";

export default function App({ selectedOptions, placeholder }: any) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        isClearable
        onChange={setSelectedOption}
        options={selectedOptions}
        placeholder={placeholder}
      />
    </div>
  );
}
