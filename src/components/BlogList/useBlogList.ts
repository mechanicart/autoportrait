import { useEffect, useState } from 'react';

import { createHttpClient } from '../../../libs/httpClient/httpClient';
import { Todo, createPlaceHolderServiceClient } from '../../clients';

export type BlogList = {
  todo: ReadonlyArray<Todo>;
};

export const useBlogList = (): BlogList => {
  const [todo, setTodo] = useState<ReadonlyArray<Todo>>([]);
  const httpClient = createHttpClient();
  const placeHolderServiceClient = createPlaceHolderServiceClient(
    'https://jsonplaceholder.typicode.com',
    httpClient,
  );
  useEffect(() => {
    placeHolderServiceClient.getPosts().then((todos) => setTodo(todos));
  });

  return {
    todo,
  };
};
