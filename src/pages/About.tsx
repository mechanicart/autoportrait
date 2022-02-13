import { FC, useMemo } from 'react';
import styled from 'styled-components/macro';

import photo from '../../public/photo.jpeg';
import { Page } from '../components/Page';
import { breakpoints } from '../components/Theme';

const PORTRAIT_HEIGHT = 300;
const AboutDescription = styled.h2`
  font-size: 1.5em;

  & > p {
    padding-bottom: 20px;
  }
`;

const Portrait = styled.div`
  object-fit: scale-down;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  max-width: 1200px;

  @media screen and ${breakpoints.mobileL} {
    flex-direction: column;
    padding-top: 20px;
  }
`;

export const About: FC = () => {
  const portraitHeight = useMemo(() => {
    const viewportHeight = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
    if (!viewportHeight) return PORTRAIT_HEIGHT;
    return viewportHeight > 600 ? PORTRAIT_HEIGHT : viewportHeight - 40;
  }, []);
  return (
    <Page>
      <Content>
        <Portrait>
          <img
            src={photo}
            alt='portrait'
            height='auto'
            width={portraitHeight}
          />
        </Portrait>
        <AboutDescription>
          <p>
            &ldquo;Art&apos;em&rdquo; is a short form of &ldquo;art them&rdquo;.
            If you say &ldquo;art them&rdquo; very fast, without carefully
            pronouncing each word, it can sound like Artem. Nice to meet you!
            Artem is my name.
          </p>
          <p>
            I am a Frontend Developer with over five years of experience. My
            level of education is a Ph.D. in Computer Science at Federal
            Research Centre “Informatics And Management” of Russian Academy of
            Sciences. I am a highly motivated worker who is constantly willing
            to learn. I am interested in web and mobile app development,
            business research. I love sports. I ride a bike, snowboard, and
            surf, and have completed multiple Ironman triathlons as well. Always
            willing to connect!
          </p>
        </AboutDescription>
      </Content>
    </Page>
  );
};
