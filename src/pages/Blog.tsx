import { FC } from 'react';
import styled from 'styled-components/macro';

import { BlogList } from '../components/BlogList/BlogList';
import { Page } from '../components/Page';

const Header = styled.h1`
  font-size: 2rem;
`;

export const Blog: FC = () => (
  <Page>
    <Header>Blog</Header>
    <BlogList />
  </Page>
);
