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

const Header = styled.h1`
  font-size: 2.5em;
`;

const HeadLine = styled.div`
  display: flex;
`;

const AnimatedHeader = styled(Header)`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubHeader = styled.h2`
  font-size: 1.5em;
  text-align: center;
`;

const Highlights = styled.span`
  color: #6c6c6c;
`;

const Content = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main: FC = () => (
  <Page>
    <Content>
      <HeadLine>
        <Header>👋&nbsp;</Header>
        <AnimatedHeader>, I&apos;m Artem!</AnimatedHeader>
      </HeadLine>
      <SubHeader>
        I&apos;m a&nbsp;
        <Highlights>Frontend developer</Highlights>
        .&nbsp; I like socially engaged projects,&nbsp;
        <Highlights>writing articles</Highlights>
        &nbsp;about coding, and&nbsp;
        <Highlights>mentoring</Highlights>
        &nbsp;developers.
      </SubHeader>
    </Content>
  </Page>
);
