import { FC, useMemo } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import { useTheme } from './hooks';
import { DARK_THEME, LIGHT_THEME, ThemeContext } from './theme';

export const ThemeContainer: FC = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === 'lightTheme' ? LIGHT_THEME : DARK_THEME;
  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
