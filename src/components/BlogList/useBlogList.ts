import { useState, useCallback, useEffect } from 'react';

import { Todo } from '../../clients';
import { MediumResponse } from '../../clients/MediumServiceClient';
import { useBlogContainer } from '../BlogContainer';

type UseBlogList = {
  todo: ReadonlyArray<Todo>;
  medium: MediumResponse | undefined;
};

export const useBlogList = (): UseBlogList => {
  const [todo, setTodo] = useState<ReadonlyArray<Todo>>([]);
  const [medium, setMedium] = useState<MediumResponse | undefined>(undefined);

  const { getTodo, getMediumPosts } = useBlogContainer();
  const fetchData = useCallback(async (): Promise<void> => {
    setTodo(await getTodo());
    setMedium(await getMediumPosts());
  }, [getTodo, getMediumPosts]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    todo,
    medium,
  };
};
