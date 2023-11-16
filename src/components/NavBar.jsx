import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
  return (
    <NavLinkWrap>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </NavLinkWrap>
  );
}

export default NavBar;

const NavLinkWrap = styled.nav`
  min-height: 100vh;
  border-right: 2px solid teal;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: fixed;
  width: 200px;
  padding: 40px 20px;
  background-color: aliceblue;
`;
const StyledLink = styled(NavLink)`
display: flex;
align-items: center;
gap: 10px;
padding: 5px;
border-radius: 5px;
text-decoration: none;
color: black;

&.active {
    background-color: #006363;
    color: white;
}
&:hover:not(.active){
    background-color: #7ba1a1;
}
`;