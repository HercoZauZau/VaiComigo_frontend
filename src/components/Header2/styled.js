import styled from 'styled-components';
import colors from '../../config/colors';

export const Main = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 200px;
  padding: 50px;
  /* background-image: url('https://media.cntraveler.com/photos/60e612ae0a709e97d73d9c60/16:9/w_1920,c_limit/Beach%20Vacation%20Packing%20List-2021_GettyImages-1030311160.jpg'); */
  background-image: url('https://s7g10.scene7.com/is/image/barcelo/best-beaches-in-cuba_best-cuba-beaches?fmt=webp-alpha&qlt=75&wid=1400&fit=crop,1');
  background-repeat: no-repeat;
  background-size: cover;
  height: 750px;

  display: flex;
  align-items: center;
  justify-content: center;

  .main2 {
    width: 80%;
    min-width: 300px;
    /* background-color: red; */
  }

  img {
    width: 80%;
    height: 425px; // temporary sizes
    border-radius: 15px;
  }

  .exbut {
    margin: auto;
    margin-bottom: -100px;
    margin-top: 50px;
    position: relative;
    display: none;
  }

  footer {
    width: 50%;
    min-width: 650px;
    height: 125px;
    margin: 50px auto;
    margin-bottom: -150px;
    margin-top: 100px;
    position: relative;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    .atributo {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin-left: 5px;
      }
    }

    input {
      width: 100px;
      background: none;
      border: none;
      border-bottom: 1.5px solid;
      margin-top: 10px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;

      p {
        margin-left: 5px;
        text-transform: uppercase;
        font-weight: normal;
      }
    }
  }

  .intro {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    color: #fff;

    h1 {
      font-size: 3em;
      text-transform: uppercase;
      font-weight: 900;
      line-height: 100%;
      margin-bottom: 50px;
    }

    p {
      min-width: 250px;
      width: 70%;
      margin: auto;
      font-size: 1.25em;

      input {
        background: none;
        background-color: transparent;
      }
    }

    h5 {
      width: fit-content;

      a {
        color: ${colors.primaryColor};

        div p {
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    footer {
      display: none;
    }

    .ex button {
      display: inherit;
    }
  }
`;
