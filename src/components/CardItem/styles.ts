import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin: 60px 0 50px 0;
  align-items: center;
  justify-content: center;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Img = styled.img`
  width: 100px;
  border-radius: 10px;
`;

export const InfoDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.orange_001};
`;

export const InfoPlace = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.purple_001};
`;

export const Info = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.pink_001};
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.pink_001};
`;
