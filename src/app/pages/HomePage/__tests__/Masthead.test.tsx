import * as React from 'react';
import ShowcaseArt from '../ShowcaseArt';
import { createRenderer } from 'react-test-renderer/shallow';

const shallowRenderer = createRenderer();

describe('<Masthead />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<ShowcaseArt />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
