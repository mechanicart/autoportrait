import { useCallback, useEffect, useState } from 'react';

type ThemeMode = 'lightTheme' | 'darkTheme';

type UseThemeContext = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

function isThemeMode(themeMode: string): themeMode is ThemeMode {
  return ['lightTheme', 'darkTheme'].indexOf(themeMode) !== -1;
}

export const useThemeContext = (): UseThemeContext => {
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
