import { useContext } from 'react';

import { ContextType, Context } from './ThemeContext';

export const useTContext = (): ContextType => {
  const context = useContext(Context);
  if (!context) throw new Error('Failed!');
  return context;
};
