import styled from 'styled-components';
// import colors from '../../config/colors';

export const Main = styled.div`
  margin-top: 20px;

  body {
    font-family: acumin-pro, system-ui, sans-serif;
    margin: 0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-size: 14px;
    align-items: start;
    min-height: 100vh;
  }

  .footer {
    display: flex;
    flex-flow: row wrap;
    padding: 30px 30px 20px 30px;
    color: #2f2f2f;
    background-color: #000000;
    border-top: 1px solid #e5e5e5;
  }

  .footer > * {
    flex: 1 100%;
  }

  .footer__addr {
    margin-right: 1.25em;
    margin-bottom: 2em;

    p {
      margin: 20px 0 0 0;
      width: 90%;
      color: #999;
      text-align: justify;
    }
  }

  .footer__logo {
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    text-transform: lowercase;
    font-size: 1.5rem;
    color: #fff;
    text-align: left;
  }

  .footer__addr h2 {
    margin-top: 1.3em;
    font-size: 15px;
    font-weight: 400;
  }

  h2 {
    color: #fff;
  }

  .nav__title {
    font-weight: 400;
    font-size: 15px;
  }

  .footer__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    max-width: max-content;
    background-color: rgb(33, 33, 33, 0.07);
    border-radius: 100px;
    color: #2f2f2f;
    line-height: 0;
    margin: 0.6em 0;
    font-size: 1rem;
    padding: 0 1.3em;
  }

  .footer ul {
    list-style: none;
    padding-left: 0;
  }

  .footer li {
    line-height: 2em;
  }

  .footer a {
    text-decoration: none;
  }

  .footer__nav {
    display: flex;
    flex-flow: row wrap;
  }

  .footer__nav > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }

  .nav__ul a {
    color: #999;
  }

  .nav__ul--extra {
    column-count: 2;
    column-gap: 1.25em;
  }

  .legal {
    display: flex;
    flex-wrap: wrap;
    color: #999;
    border-top: 1px solid;
    padding-top: 10px;
    margin-top: 10px;
  }

  .social-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 0 0;
    width: 50%;

    a {
      text-decoration: none;
      color: #fff;

      img,
      svg {
        /* height: 300px; */
      }
    }
  }

  @media screen and (min-width: 24.375em) {
    .legal {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 40.375em) {
    .footer__nav > * {
      flex: 1;
    }

    .nav__item--extra {
      flex-grow: 2;
    }

    .footer__addr {
      flex: 1 0px;
    }

    .footer__nav {
      flex: 2 0px;
    }
  }
`;
