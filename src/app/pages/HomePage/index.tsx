import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import ShowcaseArt from './ShowcaseArt';
import Nav from '../../components/NavBar/Nav';
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
        <Flex>
          <WrapperContent>
            <ShowcaseArt />
          </WrapperContent>
          <Nav />
        </Flex>
      </WrapperPage>
    </>
  );
}
