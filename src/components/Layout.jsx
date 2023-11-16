import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';

function Layout() {
  return (
    <WrapperLayout>
      <NavBar />
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </WrapperLayout>
  );
}

export default Layout;

const WrapperLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  margin: 0;
`;
const WrapperOutlet = styled.div`
  padding: 20px;
  padding-left: 250px;
`;
