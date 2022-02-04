import { FC, useState } from 'react';
import styled from 'styled-components/macro';

import CloseSVG from '../../assets/icons/close.svg';
import MenuSVG from '../../assets/icons/menu.svg';
import { breakpoints } from '../ThemeContext';
import { ThemeToggle } from '../ThemeContext/ThemeToggle';

import { useNavBar } from './useNavBar';

const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media screen and ${breakpoints.mobileL} {
    width: 100%;
    flex-direction: column;
    position: absolute;
    padding: 20px;
    right: 0;
    top: 0;
    background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  }
`;

const List = styled.ul<{ 'data-open'?: boolean }>`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and ${breakpoints.mobileL} {
    flex-direction: column;
    height: auto;
    gap: 0px;
    display: none;

    &[data-open] {
      display: block;
    }
  }
`;

const Item = styled.li<{ 'data-active'?: boolean }>`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &[data-active] {
    font-weight: bold;
    font-family: 'Dewi Expanded' sans-serif;
    text-decoration: none;
  }

  @media screen and ${breakpoints.mobileL} {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.555);
    text-align: center;
    padding: 20px 0;
    color: #fafafa;

    :nth-child(1) {
      border-top: 1px solid rgba(255, 255, 255, 0.555);
      margin-top: 50px;
    }
  }
`;

const Button = styled.button`
  display: none;
  background-color: transparent;
  place-self: flex-end;
  padding: 0;

  @media screen and ${breakpoints.mobileL} {
    display: block;
    padding-top: 12px;
    border: none;
  }
`;

export const NavBar: FC = () => {
  const { items } = useNavBar();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleList = (): void => setIsOpen(!isOpen);

  return (
    <Nav>
      <Button onClick={toggleList}>
        {isOpen ? <CloseSVG /> : <MenuSVG />}
      </Button>
      <List data-open={isOpen || undefined}>
        {items.map(({ dataActive, onClick, title }) => (
          <Item key={title} data-active={dataActive} onClick={onClick}>
            {title}
          </Item>
        ))}
      </List>
      <ThemeToggle />
    </Nav>
  );
};
