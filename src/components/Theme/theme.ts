import { createContext } from 'react';
import { DefaultTheme } from 'styled-components/macro';

export type ThemeMode = 'lightTheme' | 'darkTheme';
export type ThemeContainerType = { theme: ThemeMode; toggleTheme: () => void };
export const ThemeContext = createContext<ThemeContainerType | undefined>(
  undefined,
);

export function isThemeMode(themeMode: string): themeMode is ThemeMode {
  return ['lightTheme', 'darkTheme'].indexOf(themeMode) !== -1;
}

export const lightTheme: DefaultTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme: DefaultTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};
