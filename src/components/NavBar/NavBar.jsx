import React from 'react';
import { NavLinkWrap, StyledLink } from './NavBar.styled';


function NavBar() {
  return (
    <NavLinkWrap>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="movies">Movies</StyledLink>
    </NavLinkWrap>
  );
}

export default NavBar;

