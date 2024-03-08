"use client";

import React from "react";

interface RadioProps {
  group: string;
  name: string;
  id: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Radio: React.FC<RadioProps> = ({
  group,
  name,
  id,
  value,
  onChange,
}) => {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }
  return (
    <input
      type="radio"
      name={name}
      id={id}
      value={value}
      checked={group === value}
      onChange={handleOnChange}
    />
  );
};
