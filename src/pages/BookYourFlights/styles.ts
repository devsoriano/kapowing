import styled from 'styled-components';

export const ReserveContainer = styled.main`
  padding: 26px 0;
  min-height: 420px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  padding-top: 70px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.purple_001};
`;

export const Space = styled.p`
  margin-top: 20px;
`;
