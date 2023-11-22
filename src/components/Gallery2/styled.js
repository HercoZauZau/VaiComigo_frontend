import styled from 'styled-components';
// import colors from '../../config/colors';

export const NavBar = styled.div`
  width: fit-content;
  margin: 0 auto 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    color: #000000;
    font-weight: normal;
    padding: 5px;
    margin-right: 50px;
    border-radius: 0;
    cursor: pointer;

    &:last-of-type {
      /* margin-right: 0; */
    }
    &:nth-of-type(1) {
      color: red;
      border-bottom: 2.5px solid;
    }
  }

  @media (max-width: 500px) {
    button {
      display: block;
      text-align: center;
      margin: auto;
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;

  .spot-picture {
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    margin: 10px 10px;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 15px;
    background: #fff;
    color: #000000;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:nth-of-type(n + 5) {
      display: none;
    }

    &:hover {
      background: #f2f2f2;
    }
  }

  img {
    width: 300px;
    height: 200px;
    border-radius: 15px 15px 0 0;
  }

  .pic-data {
    padding: 10px;
    text-align: justify;

    h5 {
      margin: 10px 0 10px 0;
      padding-bottom: 5px;
      font-size: 1em;
      color: #002d62;
      border-bottom: 1px solid #63687a;
    }

    .desc {
      width: 270px;
      text-align: left;
    }

    span {
      color: #63687a;

      p {
        display: inline-block;
        font-size: 0.85em;
        margin-left: 2px;
      }

      img,
      svg {
        color: #63687a;
        margin-bottom: -2.5px;
      }
    }
  }

  @media (max-width: 350px) {
    .spot-picture {
      width: 80%;

      .desc {
        width: 95%;
      }

      img {
        width: 100%;
      }
    }
  }
`;
