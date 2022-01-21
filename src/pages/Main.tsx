import { FC } from 'react';
import styled from 'styled-components/macro';
import { Page } from '../components/Page';

const Header = styled.h1`
  font-size: 2em;
`;

export const Main: FC = () => (
  <Page>
    <Header>👋 , I&apos;m Artem!</Header>
  </Page>
);
