import styled from 'styled-components';
import colors from '../../config/colors';

export const NullPage = styled.div`
  margin: 0 30px 30px 30px;
  text-align: center;

  h1 {
    margin: 0 auto 25px auto;
    font-size: 8em;
    font-weight: bold;
    color: ${colors.primaryColor};
    letter-spacing: 5px;
    text-shadow: 0 2px 2px ${colors.primaryColor}, -2px 5px 1px #137a6f,
      -4px 8px 0px #0f6259, -6px 11px 0px #0c4e47, -8px 14px 0px #0a3e39,
      -10px 17px 0px #08322e, -12px 20px 0px #062825, -14px 23px 0px #05201e;
  }

  h2 {
    margin: 0 auto 40px auto;
    font-size: 1.75em;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    margin: 40px auto 0 auto;
    width: 110px;

    svg {
      margin-right: 5px;
    }
  }
`;
