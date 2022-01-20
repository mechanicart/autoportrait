import { FC } from 'react';
import { AppStyle } from './AppStyle';

export const AppContainer: FC = ({ children }) => (
  <>
    <AppStyle />
    {children}
  </>
);
