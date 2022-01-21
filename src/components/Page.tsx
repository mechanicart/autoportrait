import { FC } from 'react';
import styled from 'styled-components/macro';
import { NavBar } from './NavBar';
import { Logo } from './Logo';

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
`;

export const Page: FC = ({ children }) => (
  <>
    <Header>
      <Logo />
      <NavBar />
    </Header>
    {children}
  </>
);
