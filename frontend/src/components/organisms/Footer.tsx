import React from "react";
import { StyledFooter } from "../../globalStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <p>All rights reserved &copy;{new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
