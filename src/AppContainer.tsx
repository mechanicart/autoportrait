import { FC } from 'react';

import { AppStyle } from './AppStyle';
import { ThemeContainer } from './components/Theme';

export const AppContainer: FC = ({ children }) => (
  <ThemeContainer>
    <AppStyle />
    {children}
  </ThemeContainer>
);
