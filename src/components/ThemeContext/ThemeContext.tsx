import { createContext, FC, useMemo } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import { darkTheme, lightTheme } from './theme';
import { ThemeMode, useThemeContext } from './useThemeContext';

export type ContextType = { theme: ThemeMode; toggleTheme: () => void };

export const Context = createContext<ContextType | undefined>(undefined);

export const ThemeContext: FC = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeProvider theme={themeMode}>
      <Context.Provider value={contextValue}>{children}</Context.Provider>
    </ThemeProvider>
  );
};
