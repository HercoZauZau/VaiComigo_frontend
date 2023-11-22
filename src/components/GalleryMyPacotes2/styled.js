import styled from 'styled-components';
import colors from '../../config/colors';

export const Main = styled.div`
  /* width: 100%; */
  max-width: 950px;
  margin: 50px auto;
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

    .location {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0 10px 0;
      font-size: 0.8em;
      color: #000;

      .md {
        display: flex;
        align-items: center;
        justify-content: left;
      }

      p {
        margin-left: 3px;
        font-weight: normal;
      }
    }

    &:first-of-type {
      margin-left: 10px;
    }

    &:hover {
      background: #f2f2f2;
    }
  }

  img {
    width: 250px;
    height: 270px;
    border-radius: 15px 15px 0 0;
  }

  .price {
    position: relative;
    backdrop-filter: blur(25px);
    border-radius: 10px 0 0 0;
    background: rgba(0, 0, 0, 0.3);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    top: -44px;
    left: 100px;
    width: 150px;
    height: 40px;
  }

  .pic-data {
    padding: 10px;
    margin-top: -30px;

    h5 {
      margin-bottom: 10px;
      font-size: 1.3em;
    }

    .descr {
      padding: 5px;
      color: grey;
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
