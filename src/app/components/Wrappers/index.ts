import styled from 'styled-components/macro';

export const WrapperPage = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0;
  box-sizing: content-box;
`;

export const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 0;
`;

export const WrapperNav = styled.div`
  z-index: 1000;
  padding: 0.3rem;
  height: 100vh;
  background-color: white;
  min-width: 8rem;
`;

export const WrapperNavHid = styled.div`
  position: absolute;
  z-index: 998;
  // background-color: #001803;
  width: 20rem;
  height: 100vh;
  transform: translateX(-100%);
  padding: 1rem 0.5rem 1rem 3rem;
`;

export const WrapperTxtScroller = styled.div`
  z-index: 1000;
  padding: 0.3rem;
  height: 100vh;
  background-color: black;
  min-width: 3rem;
  max-width: 3rem;
  font-size: 1.3rem;
  display: flex;
`;

export const WrapperZNdx = styled.div`
  z-index: 999;
`;
