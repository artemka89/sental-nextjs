'use client';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
  font-size: 24px;
  background-color: hsl(19 31% 16%);
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 17px;
  left: 20px;
  color: inherit;
`;

export const HeaderLayout = ({ logo }: { logo: string }) => {
  return (
    <HeaderStyled>
      <HomeLink href={'/users'}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path
            d='M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z'
            fill='currentColor'
          />
        </svg>
      </HomeLink>
      <div>{logo}</div>
    </HeaderStyled>
  );
};
