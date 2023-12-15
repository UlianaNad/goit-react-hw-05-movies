import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';



function Layout() {
  return (
    
      <WrapperLayout>
        <GlobalStyle />
        <NavBar />
        <WrapperOutlet>
          <Outlet />
        </WrapperOutlet>
      </WrapperLayout>
   
  );
}

export default Layout;

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  
}`;

const WrapperLayout = styled.div``;
const WrapperOutlet = styled.div`
  padding-top: 65px;
`;
