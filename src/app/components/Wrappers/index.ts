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
  z-index: 100;
  padding: 0.3rem;
  height: 100vh;
  background-color: white;
  min-width: 8rem;
  display: grid;
`;

export const WrapperTxtScroller = styled.div`
  z-index: 100;
  padding: 0.3rem;
  height: 100vh;
  background-color: black;
  min-width: 2rem;
  max-width: 2rem;
  display: flex;
  letter-spacing: 3px;
`;
