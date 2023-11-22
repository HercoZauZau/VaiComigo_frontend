import styled from 'styled-components';
import colors from '../../config/colors';

export const Main = styled.div`
  width: 100%;
  height: fit-content;
  overflow-x: scroll;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }

  .picture {
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    margin: 10px 40px;
    display: inline-block;
    border-radius: 15px;
    background: #fff;
    color: #000000;
    padding: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:first-of-type {
      margin-left: 10px;
    }

    &:hover {
      background: #f2f2f2;
    }
  }

  img {
    width: 200px;
    height: 220px;
    border-radius: 15px 15px 0 0;
  }

  .pic-data {
    padding: 10px;

    h5 {
      margin-bottom: 10px;
    }

    span {
      color: ${colors.primaryColor};

      p {
        display: inline-block;
        font-weight: bold;
        margin-right: 7px;
      }

      img,
      svg {
        width: 14px;
        height: 14px;
        margin-right: 1px;
      }
    }
  }
`;
