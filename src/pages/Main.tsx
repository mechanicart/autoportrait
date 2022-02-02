import { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { Page } from '../components/Page';

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;

const AnimatedHeader = styled.h1`
  font-size: 2em;
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Main: FC = () => (
  <Page>
    <AnimatedHeader>Hi, I&apos;m Artem!</AnimatedHeader>
  </Page>
);
