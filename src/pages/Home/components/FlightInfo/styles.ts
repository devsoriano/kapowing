import styled from 'styled-components';

export const CardContainer = styled.main`
  background-color: ${({ theme }) => theme.color.white_001};
  border: 1px solid ${({ theme }) => theme.color.purple_001};
  border-radius: 10px;
  box-shadow: 0 0.2rem 0.4rem 0.2rem rgb(0 0 0 / 10%);
  margin: 14px auto;
  max-width: 800px;
  display: flex;
`;

export const CityImage = styled.img`
  max-width: 340px;
  border-radius: 6px 0 0 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Info = styled.div`
  padding: 12px;
`;

export const DeparturePlace = styled.h2`
  color: ${({ theme }) => theme.color.pink_001};
  margin-bottom: 14px;
`;

export const ArrivalPlace = styled.h4`
  color: ${({ theme }) => theme.color.pink_001};
`;

export const DateAndHour = styled.h5`
  color: ${({ theme }) => theme.color.orange_001};
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.color.pink_001};
`;
