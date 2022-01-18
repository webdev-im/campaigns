import React from "react";

// style
import { StyledRadioInput } from "../../globalStyles";

// interface

interface Props {
  id: string;
  onChange: any;
  placeholder: string;
  type: string;
  value: any;
  name: any;
}
const Input: React.FC<Props> = ({
  id,
  name,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <StyledRadioInput
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      required
    />
  );
};

export default Input;
