import { FC } from 'react';
import styled from 'styled-components/macro';
import { Page } from '../components/Page';

const Header = styled.h1`
  font-size: 2rem;
`;

export const About: FC = () => (
  <Page>
    <Header>About page</Header>
  </Page>
);
