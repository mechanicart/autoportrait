import { FC } from 'react';

import { useBlogList } from './useBlogList';

export const BlogList: FC = () => {
  const { todo } = useBlogList();
  return (
    <div>
      {todo.map((t) => (
        <div key={t.id}>{t.title}</div>
      ))}
    </div>
  );
};
