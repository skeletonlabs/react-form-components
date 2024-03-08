"use client";

// Ref: https://uploadcare.com/blog/how-to-upload-file-in-react/

import React from "react";

interface FileInput {
  name: string;
  id: string;
  accept?: string;
  multiple?: boolean;
  onChange: React.Dispatch<React.SetStateAction<File[]>>;
}

export const FileInput: React.FC<FileInput> = ({
  name = "",
  id = "",
  accept,
  multiple,
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
      accept={accept}
      multiple={multiple}
      onChange={handleOnChange}
    />
  );
};
