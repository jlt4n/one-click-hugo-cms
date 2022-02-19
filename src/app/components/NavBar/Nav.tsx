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

const AnchorStyle = styled.a<{ color?: string }>`
  -webkit-animation: color-change-out 0.3s ease both;
  animation: color-change-out 0.3s ease both;
  &:hover {
    cursor: pointer;
    -webkit-animation: color-change-in 0.3s ease both;
    animation: color-change-in 0.3s ease both;
  }
  ${({ color }) =>
    color &&
    `@-webkit-keyframes color-change-in {
    0% {
      color: black;
    }
    100% {
      color: ${color};
    }
  }
  @keyframes color-change-in {
    0% {
      color: black;
    }
    100% {
      color: ${color};
    }
  }

  @-webkit-keyframes color-change-out {
    0% {
      color: ${color};
    }
    100% {
      color: black;
    }
  }
  @keyframes color-change-out {
    0% {
      color: ${color};
    }
    100% {
      color: black;
    }
  }`}
`;

const TextNav = styled(TextVertLR)`
  font-size: 2rem;
  font-weight: 900;
  padding: 0 0 0 0.5rem;
`;

const Nav: React.FC = () => {
  return (
    <>
      <WrapperNav className="crt">
        <FJustifyC style={{ height: '100%' }}>
          <NavContent>
            <div>Logo Here</div>
            <FJustifyC style={{ alignItems: 'end', margin: '0 0 0.5rem 0' }}>
              <NavSocials>
                <AnchorStyle
                  color="#19dcea"
                  onClick={() => {
                    window.open('https://ko-fi.com/jltan', '_blank');
                  }}
                >
                  <TextNav style={{ fontSize: '2rem', fontWeight: '900' }}>
                    Ko-Fi
                  </TextNav>
                  <BorderB>
                    <SiKofi size="2.3rem" />
                  </BorderB>
                </AnchorStyle>
                <BorderB>
                  <AnchorStyle
                    // color="#fc4d50"
                    onClick={() => {
                      window.open('https://salieri09.booth.pm', '_blank');
                    }}
                  >
                    <TextNav style={{ fontSize: '2rem', fontWeight: '900' }}>
                      BooTH
                    </TextNav>
                  </AnchorStyle>
                </BorderB>
                <BorderB>
                  <AnchorStyle
                    // color="#0096fa"
                    onClick={() => {
                      window.open(
                        'https://www.pixiv.net/en/users/54883714',
                        '_blank',
                      );
                    }}
                  >
                    <SiPixiv size="2rem" />
                  </AnchorStyle>
                </BorderB>
                <FJustifyC>
                  <AnchorStyle
                    // color="#1d9bf0"
                    onClick={() => {
                      window.open('https://twitter.com/JL_T4N', '_blank');
                    }}
                  >
                    <SiTwitter size="2rem" />
                  </AnchorStyle>
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
