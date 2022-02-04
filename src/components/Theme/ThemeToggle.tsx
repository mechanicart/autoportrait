import { FC } from 'react';

import { useThemeContainer } from './hooks';

export const ThemeToggle: FC = () => {
  const { toggleTheme, theme } = useThemeContainer();
  return (
    <button
      type='button'
      tabIndex={0}
      onKeyDown={toggleTheme}
      onClick={toggleTheme}
    >
      {theme === 'darkTheme' ? (
        <span aria-label='Light mode' role='img'>
          🌞
        </span>
      ) : (
        <span aria-label='Dark mode' role='img'>
          🌜
        </span>
      )}
    </button>
  );
};
