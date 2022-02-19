import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ShowcaseArt from './ShowcaseArt';
import Nav from '../../components/NavBar/Nav';
import {
  WrapperPage,
  WrapperContent,
  WrapperZNdx,
} from 'app/components/Wrappers';
import * as Styles from '../../../styles/global-styles';
import TextScroller from '../../components/TextScroller';
import { NavBtn } from '../../components/Buttons/Buttons';
import NavHid from 'app/components/NavBar/NavHid';

export function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navStat, setNavStat] = useState(false);
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
          <Styles.Flex
            id="opening"
            className={isNavOpen ? 'navOpen' : 'navClose'}
            onAnimationEnd={() => setNavStat(isNavOpen)}
          >
            <NavHid navStat={navStat} />
            <Styles.ShadowBox>
              <TextScroller />
            </Styles.ShadowBox>
            <WrapperZNdx>
              <div onClick={() => setIsNavOpen(!isNavOpen)}>
                <NavBtn />
              </div>
            </WrapperZNdx>
          </Styles.Flex>
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
