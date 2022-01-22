import { FC } from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from '../ThemeContext';
import { useNavBar } from './useNavBar';

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and ${breakpoints.mobileM} {
    flex-direction: column;
    height: auto;
    gap: 0px;
  }
`;

const Item = styled.li<{ 'data-active'?: boolean }>`
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &[data-active] {
    background-color: aquamarine;
  }

  @media screen and ${breakpoints.mobileM} {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.555);
    text-align: center;
    padding: 20px 0;

    :nth-child(1) {
      border-top: 1px solid rgba(255, 255, 255, 0.555);
      margin-top: 50px;
    }
  }
`;

const Button = styled.button`
  display: none;
  position: absolute;
  right: 10px;
  top: 7px;
  padding: 5px;
  color: #000;
  font-size: 18px;

  @media screen and ${breakpoints.mobileM} {
    display: block;
  }
`;

export const NavBar: FC = () => {
  const { items } = useNavBar();
  return (
    <nav>
      <List>
        {items.map(({ dataActive, onClick, title }) => (
          <Item key={title} data-active={dataActive} onClick={onClick}>
            {title}
          </Item>
        ))}
      </List>
      <Button>BTN</Button>
    </nav>
  );
};
