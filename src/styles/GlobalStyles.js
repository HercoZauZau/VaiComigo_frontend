import 'react-toastify/dist/ReactToastify.css';
import styled, { createGlobalStyle } from 'styled-components';

import colors from '../config/colors';

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
 }

 body {
    font-family: sans-serif;
    /* background: #fff; */
    color: ${colors.primaryDarkColor};
  background: #edf2f8;

 }

 html, body, #root {
    height: 100%;
 }

 button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transform: all 300ms;

    &:hover {
      filter: brightness(85%);
    }
 }

 a {
    text-decoration: none;
 }

 ul {
    list-style: none;
 }

 h1 {
  text-align: center;
 }
`;

export const Container = styled.section`
  max-width: 400px;
  max-height: 83%;
  overflow: scroll;
  margin: auto;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: -webkit-linear-gradient(360deg, #dee1e1 10%, #f4f4f4 360%);
  background: -moz-linear-gradient(360deg, #dee1e1 10%, #f4f4f4 360%);
  background: linear-gradient(360deg, #dee1e1 10%, #f4f4f4 360%);
  padding: 25px;

  h1 {
    margin: 20px 10px 40px 10px;
    font-size: 1.45em;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  #x-btt {
    background: none;
    color: #000000;
    padding: 5px;
    margin: -10px -10px 0 0;
    font-weight: normal;
    font-size: 1.3em;
  }

  .x-div {
    display: flex;
    align-items: center;
    justify-content: right;
    user-select: none;
  }
`;

export const HomeContainer = styled.section`
  /* height: 90%; */
  /* height: calc(100% - 60px); */
  overflow: scroll;
  /* padding: 25px 60px; */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    padding: 25px 10px;
  }
`;
