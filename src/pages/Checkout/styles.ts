import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  padding: 26px 0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const DivCheckout = styled.div`
  margin: 14px auto;
  max-width: 800px;
`;

export const Title = styled.div`
  padding-top: 70px;
  margin: 0 auto;
  max-width: 800px;
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.purple_001};
`;

export const Total = styled.div`
  font-weight: bold;
  font-size: 26px;
  color: ${({ theme }) => theme.color.pink_001};
  display: grid;
  justify-content: right;
`;
