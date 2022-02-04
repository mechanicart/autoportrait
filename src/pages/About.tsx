import { FC } from 'react';
import styled from 'styled-components/macro';

import { Page } from '../components/Page';

const Header = styled.h1`
  font-size: 2rem;
`;

export const About: FC = () => (
  <Page>
    <Header>About page</Header>
    <div>
      &ldquo;Art&apos;em&rdquo; is a short form of &ldquo;art them&rdquo;. If
      you say &ldquo;art them&rdquo; very fast, without carefully pronouncing
      each word, it can sound like Artem. Nice to meet you! Artem is my name.
    </div>
    <div>I am a Frontend developer with a wide range of experience.</div>
  </Page>
);
