"use client";

import React from "react";

interface SelectMultiProps {
  name: string;
  id: string;
  value: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SelectMulti: React.FC<SelectMultiProps> = ({
  name = "",
  id = "",
  value = [],
  onChange,
}) => {
  function handleOnChange(event: any) {
    console.log(event);

    var options = event.target.options;
    var newValueArr: string[] = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        newValueArr.push(options[i].value);
      }
    }
    onChange(newValueArr);
  }

  return (
    <select
      name={name}
      id={id}
      value={value}
      onChange={handleOnChange}
      multiple
    >
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="fizz">Fizz</option>
      <option value="buzz">Buzz</option>
    </select>
  );
};
