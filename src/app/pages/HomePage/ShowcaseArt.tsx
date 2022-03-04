import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const NavigationSlider = withAutoplay(withNavigationHandlers(AwesomeSlider));

export default withNavigationContext(({ fullpage }) => {
  const [anim, setAnim] = useState(`foldOutAnimation`);
  // const [arts, setArts] = useState([]);
  useEffect(() => {
    const fetchArt = async () => {
      const media = await axios.get('/media');
      console.log(media);
    };
    fetchArt();
  }, []);

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
    <>
      <NavigationSlider
        className="awesome-slider"
        play={true}
        fillParent={true}
        interval={3000}
        buttons={false}
        startupDelay={275}
        animation={anim}
        activityColor="blue"
        style={{ padding: '0 0 0 8rem' }}
        media={[
          {
            source: '/images/art/art_1.jpg',
          },
          {
            source: '/images/art/art_2.jpg',
          },
          {
            source: '/images/art/art_3.jpg',
          },
          {
            source: '/images/art/art_4.jpg',
          },
          {
            source: '/images/art/art_5.jpg',
          },
        ]}
        onTransitionEnd={() => RandAnims()}
      />
    </>
  );
});
