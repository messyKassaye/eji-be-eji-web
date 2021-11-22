import { AutoComplete, Select } from "antd";
import React, { useState } from "react";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

export default function Search() {
  const { Option } = Select;
  const [options, setOptions] = useState([]);
  const handleChange = (value) => {
    console.log(value);
  };

  const onSelect = (value) => {
    console.log(value);
  };

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  return (
    <div className="flex md:w-5/12 w-full">
      <Select
        size="large"
        defaultValue="Select category"
        style={{ width: 150 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">House rent</Option>
      </Select>

      <AutoComplete
        className="w-screen"
        size="large"
        options={options}
        style={{
          width: "100%",
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="Search your need..."
      />
    </div>
  );
}
