import { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import {
  withNavigationContext,
  withNavigationHandlers,
} from 'react-awesome-slider/dist/navigation';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

// const AnimRand = () => {
//   let pick = Math.floor(Math.random() * 5);

//   return Anims[pick];
// };

const NavigationSlider = withAutoplay(withNavigationHandlers(AwesomeSlider));

const ArtSlider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      play={true}
      interval={3000}
      buttons={false}
      media={[
        {
          source: '/images/art/E_TCWCuVkAMuTza.jpg',
        },
        {
          source: '/images/art/FD1O8JlUYAA2bMZ.jpg',
        },
        {
          source: '/images/art/FEIV03UaUAAJqe4.jpg',
        },
        {
          source: '/images/art/FF7II5JVQAM1ILt.jpg',
        },
      ]}
    />
  );
};

export default withNavigationContext(({ fullpage }) => {
  const [anim, setAnim] = useState(`foldOutAnimation`);

  const anims = [
    'cubeAnimation',
    'fallAnimation',
    'foldOutAnimation',
    'openAnimation',
    'scaleOutAnimation',
  ];

  const RandAnims = () => {
    let pick = Math.floor(Math.random() * 5);
    setAnim(anims[pick]);
  };

  return (
    <NavigationSlider
      className="awesome-slider"
      play={true}
      interval={3000}
      buttons={false}
      startupDelay={275}
      animation={anim}
      media={[
        {
          source: '/images/art/E_TCWCuVkAMuTza.jpg',
        },
        {
          source: '/images/art/FD1O8JlUYAA2bMZ.jpg',
        },
        {
          source: '/images/art/FEIV03UaUAAJqe4.jpg',
        },
        {
          source: '/images/art/FF7II5JVQAM1ILt.jpg',
        },
      ]}
      onTransitionEnd={() => RandAnims()}
    />
  );
});
