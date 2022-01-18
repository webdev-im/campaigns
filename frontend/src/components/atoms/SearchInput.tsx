import React from "react";

// style
import { StyledSearchInput } from "../../globalStyles";

// interface

interface Props {
  action: any;
  id: string;
  placeholder: string;
  type: string;
}
const Input: React.FC<Props> = ({ action, id, placeholder, type }) => {
  return (
    <StyledSearchInput
      id={id}
      onChange={action}
      placeholder={placeholder}
      type={type}
      required
    />
  );
};

export default Input;
