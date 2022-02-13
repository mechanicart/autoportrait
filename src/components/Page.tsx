import { FC, useMemo } from 'react';
import styled from 'styled-components/macro';

import { Logo } from './Logo';
import { NavBar } from './NavBar';
import {
  breakpoints,
  useThemeContainer,
  DARK_THEME,
  LIGHT_THEME,
} from './Theme';
import { ThemeMode } from './Theme/theme';

const Header = styled.header<{
  'data-theme': ThemeMode;
  'data-background': string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  padding: 16px;
  position: fixed;
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue) bottom
    #363537 no-repeat;
  background-size: 100% 5px;
  width: 100%;
  transition: background 0.2s ease-in, color 0.2s ease-in;

  &[data-theme='lightTheme'] {
    background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue) bottom
      #e2e2e2 no-repeat;
    background-size: 100% 5px;
  }

  @media screen and ${breakpoints.mobileL} {
    flex-direction: column;
    background-size: auto;
    background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);

    &[data-theme='lightTheme'] {
      background-size: auto;
      background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
    }
  }
`;

const LogoWrapper = styled.div`
  place-self: flex-start;
  z-index: 10;
`;

export const Page: FC = ({ children }) => {
  const { theme } = useThemeContainer();
  const backgroundColor = useMemo(
    () => (theme === 'darkTheme' ? DARK_THEME.body : LIGHT_THEME.body),
    [theme],
  );
  return (
    <>
      {/* TODO: need to use a color from the parameter */}
      <Header data-theme={theme} data-background={backgroundColor}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavBar />
      </Header>
      {children}
    </>
  );
};
