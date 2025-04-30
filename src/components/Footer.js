import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--primary-dark);
  color: white;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>
        © {new Date().getFullYear()} Project Information Management System. All
        rights reserved.
      </p>
    </FooterContainer>
  );
}

export default Footer;
