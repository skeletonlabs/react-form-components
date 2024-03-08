"use client";

import React from "react";

interface CheckboxProps {
  name: string;
  id: string;
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
}) => {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.checked);
  }
  return <input type="checkbox" checked={checked} onChange={handleOnChange} />;
};
