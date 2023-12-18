const { createGlobalStyle, default: styled } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  
}`;

export const WrapperLayout = styled.div``;
export const WrapperOutlet = styled.div`
  padding-top: 65px;
`;
