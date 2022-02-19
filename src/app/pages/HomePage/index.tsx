import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import ShowcaseArt from './ShowcaseArt';
import Nav from '../../components/NavBar/Nav';
import { WrapperPage, WrapperContent } from 'app/components/Wrappers';
import * as Styles from '../../../styles/global-styles';
import TextScroller from '../../components/TextScroller';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      {/* <NavBar /> */}
      <WrapperPage>
        <Styles.Flex>
          <Styles.ShadowBox>
            <Nav />
          </Styles.ShadowBox>
          <Styles.ShadowBox>
            <TextScroller />
          </Styles.ShadowBox>
          <WrapperContent>
            <Styles.BGSlider>
              <ShowcaseArt />
            </Styles.BGSlider>
          </WrapperContent>
        </Styles.Flex>
      </WrapperPage>
    </>
  );
}
