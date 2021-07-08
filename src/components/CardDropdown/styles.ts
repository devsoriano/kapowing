import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.pink_001};
  background-color: ${({ theme }) => theme.color.white_001};
  top: 60px;
  right: 40px;
  z-index: 5;
  border-radius: 10px;
  box-shadow: 4px 4px 2px rgb(192 192 192 / 50%);
`;

export const CardItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Empty = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.orange_001};
  margin: 50px auto;
`;
