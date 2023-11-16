import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <div>
      <h1>Oops!! Page is not found!</h1>
      <h2>
        You can go to <Link to="/">Home</Link>
      </h2>
    </div>
  );
};

export default NotFound;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
