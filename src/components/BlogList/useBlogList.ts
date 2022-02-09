import { useState, useCallback, useEffect } from 'react';

import { Todo } from '../../clients';
import { useBlogContainer } from '../BlogContainer';

type UseBlogList = {
  todo: ReadonlyArray<Todo>;
};

export const useBlogList = (): UseBlogList => {
  const [todo, setTodo] = useState<ReadonlyArray<Todo>>([]);

  const { getPosts } = useBlogContainer();
  const fetchData = useCallback(
    async (): Promise<void> => setTodo(await getPosts()),
    [getPosts],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    todo,
  };
};
