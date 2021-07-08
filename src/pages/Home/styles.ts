import styled from 'styled-components';

export const CardsContainer = styled.main`
  padding: 26px 0;
  min-height: 420px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.color.orange_001};
  margin: 14px auto;
  max-width: 800px;
  font-size: 18px;
  font-weight: 500;
`;
