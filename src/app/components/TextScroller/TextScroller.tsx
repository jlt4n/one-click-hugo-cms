import * as React from 'react';
import { WrapperTxtScroller } from '../Wrappers';
import Marquee from 'react-fast-marquee';

const TextScroller: React.FC = () => {
  return (
    <>
      <WrapperTxtScroller className="crt">
        {/* <TextVertLR style={{ height: '100vh' }} className="scroll">
          <span>
            TextScroller TextScroller TextScroller TextScroller TextScroller
            TextScroller TextScroller
          </span>
        </TextVertLR>
        <TextVertLR style={{ height: '100vh' }} className="scroll scroll2">
          <span>
            TextScroller TextScroller TextScroller TextScroller TextScroller
            TextScroller TextScroller
          </span>
        </TextVertLR> */}
        <div className="text-glow marquee-force-visible">
          <Marquee gradient={false} speed={2} pauseOnHover={true}>
            TextScroller - TextScroller - TextScroller - TextScroller -
            TextScroller - TextScroller -TextScroller
          </Marquee>
        </div>
      </WrapperTxtScroller>
    </>
  );
};

export default TextScroller;
