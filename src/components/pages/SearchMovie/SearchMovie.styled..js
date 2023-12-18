import styled from "styled-components";

export const StyledUl = styled.ul`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const StyledInput = styled.input`
  width: 250px;
    height: 40px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(225, 225, 225);
    padding: 8px 10px;
    outline: none;
    color: rgb(87, 75, 65);
    display: block;
    border-radius: 5px;

  &focus,
  &:hover {
    border-color: rgba(0, 161, 82, 0.5);
    box-shadow: 0 0 5px 1px #006363;
  }
`;
export const StyledButton = styled.button`
  display: inline-block;
  padding: 9px 20px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: #008888;
  width: 150px;
  position: relative;
  overflow: hidden;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #006363;
  }
  @media (max-width: 425px) {
    min-width: 47%;
    font-size: 12px;
    padding: 5px 10px;
    margin-right: 0;
  }
`;
export const WrapSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
`;