import * as React from 'react';
import styled from 'styled-components/macro';
import { WrapperTxtScroller } from '../Wrappers';
import Marquee from 'react-fast-marquee';

const Text = styled.p`
  letter-spacing: 3px;
  font-weight: 1000;
`;

const TextScroller: React.FC = () => {
  return (
    <>
      <WrapperTxtScroller className="crt">
        <div className="text-glow marquee-force-visible">
          <Marquee
            gradient={false}
            speed={2}
            pauseOnHover={true}
            direction="right"
          >
            <Text>
              TextScroller - TextScroller - TextScroller - TextScroller -
              TextScroller - TextScroller -TextScroller
            </Text>
          </Marquee>
        </div>
      </WrapperTxtScroller>
    </>
  );
};

export default TextScroller;
