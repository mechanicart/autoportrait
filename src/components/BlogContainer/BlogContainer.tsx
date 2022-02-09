import { createContext, FC, useMemo } from 'react';

import { createHttpClient } from '../../../libs/httpClient/httpClient';
import {
  createPlaceHolderServiceClient,
  createMediumServiceClient,
  Todo,
} from '../../clients';
import { MediumResponse } from '../../clients/MediumServiceClient';

export type BlogContainerContext = {
  getTodo: () => Promise<ReadonlyArray<Todo>>;
  getMediumPosts: () => Promise<MediumResponse>;
};

export const BlogContext = createContext<BlogContainerContext | undefined>(
  undefined,
);

export const BlogListContainer: FC = ({ children }) => {
  const httpClient = createHttpClient();
  const { getTodo } = createPlaceHolderServiceClient(
    'https://jsonplaceholder.typicode.com',
    httpClient,
  );
  const { getMediumPosts } = createMediumServiceClient(
    'https://api.rss2json.com/v1/api.json',
    httpClient,
  );

  const blogListContainer = useMemo(
    () => ({ getTodo, getMediumPosts }),
    [getTodo, getMediumPosts],
  );
  return (
    <BlogContext.Provider value={blogListContainer}>
      {children}
    </BlogContext.Provider>
  );
};
