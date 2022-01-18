import React from "react";

// style
import { StyledInput } from "../../globalStyles";

// interface

interface Props {
  id: string;
  onInput: any;
  placeholder: string;
  type: string;
  value: any;
}
const Input: React.FC<Props> = ({ id, onInput, placeholder, type, value }) => {
  return (
    <StyledInput
      id={id}
      onInput={onInput}
      placeholder={placeholder}
      type={type}
      value={value}
      required
    />
  );
};

export default Input;
