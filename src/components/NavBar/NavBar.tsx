import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { breakpoints } from '../ThemeContext';

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

const Item = styled.li`
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

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
  const navigate = useNavigate();
  const onClick = useCallback(
    (route: string): void => navigate(`${route}`),
    [navigate],
  );

  return (
    <nav>
      <List>
        <Item onClick={() => onClick('/')}>Home</Item>
        <Item onClick={() => onClick('/about')}>About</Item>
      </List>
      <Button>BTN</Button>
    </nav>
  );
};
