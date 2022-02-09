import { useContext } from 'react';

import { BlogContainerContext, BlogContext } from './BlogContainer';

export const useBlogContainer = (): BlogContainerContext => {
  const context = useContext(BlogContext);
  if (!context) throw new Error('blog context is empty');
  return context;
};
