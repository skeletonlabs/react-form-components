"use client";

// Ref: https://uploadcare.com/blog/how-to-upload-file-in-react/

import React from "react";

interface FileInput {
  name: string;
  id: string;
  inputRest?: object;
  onChange: React.Dispatch<React.SetStateAction<File[]>>;
}

export const FileInput: React.FC<FileInput> = ({
  name = "",
  id = "",
  inputRest,
  onChange,
}) => {
  function handleOnChange(event: any) {
    if (event.target.files) onChange(event.target.files);
  }

  return (
    <input
      type="file"
      name={name}
      id={id}
      {...inputRest}
      onChange={handleOnChange}
    />
  );
};
