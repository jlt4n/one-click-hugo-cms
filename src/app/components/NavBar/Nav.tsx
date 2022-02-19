import * as React from 'react';
import styled from 'styled-components/macro';
import { WrapperNav } from '../Wrappers';
import { SiTwitter, SiKofi, SiPixiv } from 'react-icons/si';
import { Flex, Grid, TextVertLR } from 'styles/global-styles';

const FJustifyC = styled(Flex)`
  justify-content: center;
`;

const NavContent = styled(Grid)`
  grid-template-rows: 1fr 1fr;
`;

const NavSocials = styled.div`
  align-items: end;
`;

const BorderB = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 1rem 0;
  border-style: solid;
  border-color: black;
  border-width: 0 0 0.2rem 0;
  margin: 0 0 1rem 0;
`;

const Nav: React.FC = () => {
  return (
    <>
      <WrapperNav className="crt">
        <FJustifyC style={{ height: '100vh' }}>
          <NavContent>
            <div>Logo Here</div>
            <FJustifyC style={{ alignItems: 'end', margin: '0 0 1rem 0' }}>
              <NavSocials>
                <TextVertLR style={{ fontSize: '2rem', fontWeight: '900' }}>
                  Ko-Fi
                </TextVertLR>
                <BorderB>
                  <SiKofi size="2.3rem" />
                </BorderB>
                <BorderB>
                  <TextVertLR style={{ fontSize: '2rem', fontWeight: '900' }}>
                    BooTH
                  </TextVertLR>
                </BorderB>
                <BorderB>
                  <SiPixiv size="2rem" />
                </BorderB>
                <FJustifyC>
                  <SiTwitter size="2rem" />
                </FJustifyC>
              </NavSocials>
            </FJustifyC>
          </NavContent>
        </FJustifyC>
      </WrapperNav>
    </>
  );
};

export default Nav;
