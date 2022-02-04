import { FC, useMemo } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import { useTheme } from './hooks';
import { darkTheme, lightTheme, ThemeContext } from './theme';

export const ThemeContainer: FC = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
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
