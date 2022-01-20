import { FC } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { darkTheme, lightTheme } from './theme';
import { useThemeContext } from './useThemeContext';

export const ThemeContext: FC = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <button type="button" tabIndex={0} onKeyDown={toggleTheme} onClick={toggleTheme}>
        {theme === 'darkTheme'
          ? <span aria-label="Light mode" role="img">🌞</span>
          : <span aria-label="Dark mode" role="img">🌜</span>}
      </button>
      {children}
    </ThemeProvider>
  );
};
