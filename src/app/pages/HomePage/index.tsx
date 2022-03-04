import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ShowcaseArt from './ShowcaseArt';
import Nav from '../../components/NavBar/Nav';
import {
  WrapperPage,
  WrapperContent,
  WrapperZNdx,
} from 'app/components/Wrappers';
import * as styl from '../../../styles/global-styles';
import TextScroller from '../../components/TextScroller';
import { NavBtn } from '../../components/Buttons/Buttons';
import NavHid from 'app/components/NavBar/NavHid';
import { useSpring } from 'react-spring';

export function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navStat, setNavStat] = useState(false);
  const animNav = useSpring({
    transform: isNavOpen ? 'translateX(18rem)' : 'translateX(0rem)',
    zIndex: 999,
    onRest: () => {
      if (isNavOpen) {
        setNavStat(true);
      }
    },
  });
  // TODO: Make states efficient in refactor;
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
        <styl.Flex>
          <styl.ShadowBox>
            <Nav />
          </styl.ShadowBox>
          <styl.AnimFlex
            id="opening"
            style={animNav}
            // className={isNavOpen ? 'navOpen' : 'navClose'}
            // onAnimationEnd={() => {
            //   if (isNavOpen) {
            //     setNavStat(true);
            //   }
            // }}
          >
            <NavHid navStat={navStat} />
            <styl.ShadowBox>
              <TextScroller />
            </styl.ShadowBox>
            <WrapperZNdx>
              <div onClick={() => setIsNavOpen(!isNavOpen)}>
                <NavBtn />
              </div>
            </WrapperZNdx>
          </styl.AnimFlex>
          <WrapperContent>
            <styl.BGSlider>
              <ShowcaseArt />
            </styl.BGSlider>
          </WrapperContent>
        </styl.Flex>
      </WrapperPage>
    </>
  );
}
