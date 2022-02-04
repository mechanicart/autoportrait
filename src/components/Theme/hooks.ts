import { useCallback, useEffect, useState, useContext } from 'react';

import {
  isThemeMode,
  ThemeContainerType,
  ThemeContext,
  ThemeMode,
} from './theme';

type UseTheme = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<ThemeMode>('lightTheme');

  const changeTheme = useCallback(
    (themeMode: ThemeMode) => {
      setTheme(themeMode);
      window.localStorage.setItem('theme', themeMode);
    },
    [setTheme],
  );

  const toggleTheme = useCallback(() => {
    changeTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  }, [changeTheme, theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const isDarkPrefer =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!localTheme || !isThemeMode(localTheme)) {
      changeTheme(isDarkPrefer ? 'darkTheme' : 'lightTheme');
    } else {
      setTheme(localTheme);
    }
  }, [setTheme, changeTheme]);

  return {
    theme,
    toggleTheme,
  };
};

export const useThemeContainer = (): ThemeContainerType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Failed!');
  return context;
};
