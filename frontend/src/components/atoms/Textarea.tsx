import React from "react";

// style
import { StyledTextarea } from "../../globalStyles";

// interface

interface Props {
  id: string;
  onInput: any;
  placeholder: string;
  value: any;
}

const Textarea: React.FC<Props> = ({
  id,
  onInput,
  placeholder,

  value,
}) => {
  return (
    <StyledTextarea
      id={id}
      onInput={onInput}
      placeholder={placeholder}
      value={value}
    ></StyledTextarea>
  );
};

export default Textarea;
