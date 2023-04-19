import React from 'react'
import styled from "styled-components";
import  Logo  from './icons/Logo';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;

`;

const Header = () => {

  return (
      <StyledHeader>
          <Logo className="logo"/>
  </StyledHeader>
  )
}

export default Header