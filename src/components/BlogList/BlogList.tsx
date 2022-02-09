import { FC } from 'react';

import { useBlogList } from './useBlogList';

export const BlogList: FC = () => {
  const { medium } = useBlogList();
  return <div>{JSON.stringify(medium)}</div>;
};
