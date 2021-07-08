import styled from 'styled-components';

export const Foot = styled.footer`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.purple_001};
  border-top: 35px solid ${({ theme }) => theme.color.pink_001};
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.white_001};
  margin-top: 30px;
`;
