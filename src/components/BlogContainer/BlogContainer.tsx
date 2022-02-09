import { createContext, FC, useMemo } from 'react';

import { createHttpClient } from '../../../libs/httpClient/httpClient';
import { createPlaceHolderServiceClient, Todo } from '../../clients';

export type BlogContainerContext = {
  getPosts: () => Promise<readonly Todo[]>;
};

export const BlogContext = createContext<BlogContainerContext | undefined>(
  undefined,
);

export const BlogListContainer: FC = ({ children }) => {
  const httpClient = createHttpClient();
  const { getPosts } = createPlaceHolderServiceClient(
    'https://jsonplaceholder.typicode.com',
    httpClient,
  );

  const blogListContainer = useMemo(() => ({ getPosts }), [getPosts]);
  return (
    <BlogContext.Provider value={blogListContainer}>
      {children}
    </BlogContext.Provider>
  );
};
