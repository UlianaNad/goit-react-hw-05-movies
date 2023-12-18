
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export  const NavLinkWrap = styled.nav`
  min-width: 100%;
  display: flex;
  gap: 25px;
  position: fixed;
  width: 200px;
  padding: 12px 0px;
  background-color: #c0ebe4;
  align-content: center;
  justify-content: center;
`;

export  const StyledLink = styled(NavLink)`
display: flex;
align-items: center;
gap: 10px;
padding: 10px;
border-radius: 5px;
text-decoration: none;
color: black;

&.active {
    background-color: #006363;
    color: white;
}
&:hover:not(.active){
    background-color: #739696;
}
`;