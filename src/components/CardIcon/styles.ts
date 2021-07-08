import styled from 'styled-components';

export const Title = styled.div`
  color: ${({ theme }) => theme.color.purple_001};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.color.pink_001};
  }
`;

export const Principal = styled.div`
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: bolder;
  bottom: 8px;
  color: ${({ theme }) => theme.color.white_001};
`;

export const Reservation = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
