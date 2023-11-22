import styled from 'styled-components';
import colors from '../../config/colors';

export const Main = styled.main`
  padding: 4% 10%;

  h1 {
    text-align: center;
    margin: 0 0 25px 0;
    font-family: 'Pacifico', cursive;
    font-size: 2.25em;
  }

  .gal_title {
    margin: 0 0 100px 0;
  }

  .msGallery {
    img {
      border-radius: 10px;
    }
  }

  .bw {
    filter: grayscale(100%);
  }
`;

export const Letter = styled.nav`
  text-align: justify;
  margin: 100px 0 0 0;
  max-height: 400px;
  background: #18202d;
  color: #f3deff;
  padding: 25px 50px 40px 50px;
  border-radius: 20px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  p {
    font-family: 'Pacifico', cursive;

    &:last-of-type {
      margin-top: 30px;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 60px;
  width: 100%;

  div {
    width: 15%;
    min-width: 125px;
    height: 45px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c0c0c0;
    cursor: pointer;

    &:first-of-type {
      background-color: ${colors.primaryColor};
    }

    &:hover {
      background-color: ${colors.primaryColor};
      border: 2px solid;
    }
  }
`;
