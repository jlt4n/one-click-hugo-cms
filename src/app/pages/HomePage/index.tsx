import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import ShowcaseArt from './ShowcaseArt';
import { Features } from './Features';
import { WrapperPage, WrapperContent, Flex } from 'app/components/Wrappers';

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
        <WrapperContent>
          <Flex>
            <ShowcaseArt />
          </Flex>
        </WrapperContent>
      </WrapperPage>
    </>
  );
}
