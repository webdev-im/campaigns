import React from "react";

// style
import { StyledButton } from "../../globalStyles";

// interface
interface Props {
  onClick: any;
  text: string;
  type: any;
}

const Button: React.FC<Props> = ({ onClick, text, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
