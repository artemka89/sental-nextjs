'use client';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--header-height);
  margin-top: 20px;
  background-color: hsl(19 31% 16%);
`;
export const FooterLayout = ({ text }: { text: string }) => {
  return <FooterStyled>{text}</FooterStyled>;
};
