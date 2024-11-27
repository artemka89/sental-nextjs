'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { Container } from './container';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
  font-size: 24px;
  background-color: hsl(19 31% 16%);
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeLink = styled(Link)`
  min-width: 50px;
  display: flex;
  align-items: center;
  color: inherit;
`;

const Logo = styled.div`
  flex-basis: '100%';
  display: 'flex';
  justify-content: 'center';
`;

export const HeaderLayout = ({ logo }: { logo: string }) => {
  return (
    <Header>
      <Container style={{ width: '100%' }}>
        <HeaderWrapper>
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
          <Logo>{logo}</Logo>
          <div style={{ minWidth: '50px' }}></div>
        </HeaderWrapper>
      </Container>
    </Header>
  );
};
