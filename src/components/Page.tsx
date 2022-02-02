import { FC } from 'react';
import styled from 'styled-components/macro';
import { NavBar } from './NavBar';
import { Logo } from './Logo';
import { breakpoints } from './ThemeContext';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  top: 0;
  padding: 16px;
  position: fixed;

  width: 100%;
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);

  @media screen and ${breakpoints.mobileM} {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`;

const LogoWrapper = styled.div`
  place-self: flex-start;
  z-index: 10;
`;

export const Page: FC = ({ children }) => (
  <>
    <Header>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavBar />
    </Header>
    {children}
  </>
);
