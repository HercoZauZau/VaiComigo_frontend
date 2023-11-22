import styled from 'styled-components';
import colors from '../../config/colors';

export const Title = styled.div`
  width: 35%;
  display: inline-block;
  text-align: justify;
  /* margin: 20px auto; */

  .italic {
    font-style: italic;
    opacity: 90%;
  }

  h2 {
    color: #fff;
    font-size: 2em;

    &:first-of-type {
      font-size: 4.5em;
      -webkit-background-clip: text;
      background-clip: text;
      background-image: url('assets/img/flag.png');
      background-size: contain;
      background-repeat: repeat-x;
      color: transparent;
    }
  }
`;

export const Main = styled.div`
  width: calc(100% - 10px);
  height: 650px;
  margin: 100px auto 0 auto;
  padding: 30px 50px 40px 50px;
  /* border-radius: 10px; */
  background-image: url('https://wallpaperaccess.com/full/81552.jpg');
  background-size: cover;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const Gallery = styled.div`
  --radius: 10px;

  width: 55%;
  min-width: 550px;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 0.5px solid #fff;
  border-radius: var(--radius);
  float: right;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  .picture {
    /* cursor: pointer; */
    user-select: none;
    height: fit-content;
    width: 80%;
    margin: 20px auto;
    display: inline-block;
    border-radius: var(--radius);
    color: #fff;
    padding: 3px;
    display: flex;

    &:hover {
      /* color: ${colors.primaryColor}; */
    }

    img {
      width: 40%;
      height: 180px;
      border: 1px solid #fff;
      border-radius: 5px;
    }
  }

  .pic-data {
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h5 {
      font-size: 1.35em;
      text-transform: uppercase;
    }

    .descTxt {
      text-align: justify;
      font-weight: normal;
      color: rgba(255, 255, 255, 0.85);
      font-style: italic;
    }

    span {
      color: #fff;
      margin-top: 20px;

      p {
        display: inline-block;
        font-weight: bold;
        margin-right: 10px;
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
