import styled from "styled-components";

export const StyledUl = styled.ul`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;
export const StyledItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px;
  border-radius: 10px;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const StyledImage = styled.img`
  object-fit: cover;
  height: 250px;
  width: 180px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
export const StyledMovieName = styled.p`
  text-align: center;
  color: teal;
  font-weight: 600;
  font-size: 20px;
  margin: 5px;
`;