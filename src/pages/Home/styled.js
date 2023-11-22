import styled from 'styled-components';
import colors from '../../config/colors';

export const Main = styled.main`
  background: #edf2f8;

  .rsn {
    font-size: 2.5em;
    font-weight: 900;
    margin: auto;
  }

  .mw5 {
    max-width: 500px;
  }

  .mb5 {
    margin-bottom: 50px;
  }

  .dst {
    margin: auto;
    text-align: center;
    margin-bottom: 100px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

export const ReasonsComponent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10%;

  div {
    width: 160px;
    height: 190px;
    margin: 1em auto;
    font-size: 1.25em;
    max-width: 23em;
    /* border: 3px solid; */
    padding: 1em;
    /* border-radius: 15px; */
    position: relative;

    --b: 0.5em;
    --c: 3em;
    --r: 2em;
    border: solid var(--b) transparent;

    &::before {
      position: absolute;
      z-index: -1;
      inset: calc(-1 * var(--b));
      border: inherit;
      border-radius: var(--r);
      background: linear-gradient(orange, deeppink, purple) border-box;
      --corner: conic-gradient(
          from -90deg at var(--c) var(--c),
          red 25%,
          #0000 0
        )
        0 0 / calc(100% - var(--c)) calc(100%- var(--c)) border-box;
      --inner: conic-gradient(red 0 0) padding-box;
      -webkit-mask: var(--corner), var(--inner);
      /* -webkit-mask-composite: source-out; */
      mask: var(--corner) subtract, var(--inner);
      content: '';
    }

    span {
      color: ${colors.primaryColor};
      cursor: pointer;
    }
  }
`;
