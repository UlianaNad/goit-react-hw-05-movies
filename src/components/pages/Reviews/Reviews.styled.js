import styled from 'styled-components';

export const WrapUl = styled.ul`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Styledli = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
`;
export const StyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 600;
  margin-top: 5px;
`;