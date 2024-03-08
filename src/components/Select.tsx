"use client";

import React from "react";

interface SelectProps {
  name: string;
  id: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Select: React.FC<SelectProps> = ({
  name = "",
  id = "",
  value = "",
  onChange,
}) => {
  function handleOnChange(event: any) {
    onChange(event.target.value);
  }
  return (
    <select name={name} id={id} value={value} onChange={handleOnChange}>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="fizz">Fizz</option>
      <option value="buzz">Buzz</option>
    </select>
  );
};
