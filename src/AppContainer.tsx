import { FC } from 'react';
import { AppStyle } from './AppStyle';
import { ThemeContext } from './components/ThemeContext';

export const AppContainer: FC = ({ children }) => (
  <ThemeContext>
    <AppStyle />
    {children}
  </ThemeContext>
);
