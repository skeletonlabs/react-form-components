"use client";

// Ref: https://uploadcare.com/blog/how-to-upload-file-in-react/

import React from "react";

interface FileInput extends React.ComponentPropsWithoutRef<'input'> {
  extraProp?: string
}

export const FileInput: React.FC<FileInput> = ({
  ...rest
}) => {
  return (
    <input
      type="file"
      {...rest}
    />
  );
};
