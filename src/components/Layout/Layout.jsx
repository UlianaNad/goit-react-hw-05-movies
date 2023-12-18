import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { GlobalStyle, WrapperLayout, WrapperOutlet } from './Layout.styled';

function Layout() {
  return (
    <WrapperLayout>
      <GlobalStyle />
      <NavBar />
      <WrapperOutlet>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
    </WrapperLayout>
  );
}

export default Layout;

