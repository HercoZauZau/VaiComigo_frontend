import styled from 'styled-components';

export const Main = styled.div`
  a:link,
  a:active,
  a:visited,
  a:hover {
    color: #3f51b5;
  }

  .outerdiv {
    width: 100%;
    min-height: 100vh;
    background: #edf2f8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .innerdiv {
    transform: scale(0.9);
    margin: 1rem;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-rows: repeat(2, 22rem);
    grid-template-columns: repeat(4, 17rem);
  }
  .eachdiv {
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    box-shadow: 5px 5px 20px #6d6b6b6b;
    color: white;
  }
  .div1 {
    background: #733fc8;
    grid-column: 1/3;
    grid-row: 1/2;
    background-image: url(https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/bg-pattern-quotation.svg);
    background-repeat: no-repeat;
    background-position-x: 25rem;
  }
  .div2 {
    background: #49556b;
    grid-column: 3/4;
    grid-row: 1/2;
  }
  .div3 {
    background: white;
    grid-column: 4/5;
    grid-row: 1/3;
    color: black;
  }
  .div4 {
    background: white;
    grid-column: 1/2;
    grid-row: 2/3;
    color: black;
  }
  .div5 {
    background: #18202d;
    grid-column: 2/4;
    grid-row: 2/3;
  }
  .userdetails {
    display: flex;
  }
  .imgbox {
    margin-right: 1rem;
  }
  .imgbox img {
    border-radius: 50%;
    width: 2rem;
    border: 2px solid #cec5c5;
  }
  .detbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .detbox p {
    margin: 0;
  }
  .detbox .name {
    color: hsl(0, 0%, 81%);
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
    font-weight: 600;
  }
  .detbox .name.dark {
    color: #49505a;
  }
  .detbox .designation {
    color: hsl(0, 0%, 81%);
    opacity: 50%;
    font-size: 0.8rem;
  }
  .detbox .designation.dark {
    color: #49505a;
  }
  .review h4 {
    font-size: 1.4rem;
    color: #f3deff;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }
  .review.dark h4 {
    color: #4b5258;
  }
  .review p {
    font-size: 0.95rem;
    color: #f3deff;
    font-weight: 500;
    opacity: 50%;
    line-height: 1.5;
  }
  .review.dark p {
    color: #0e0e0e;
  }

  @media only screen and (max-width: 1000px) {
    .innerdiv {
      transform: scale(0.7);
    }
  }
  @media only screen and (max-width: 800px) {
    .innerdiv {
      transform: scale(0.6);
    }
  }
  @media only screen and (max-width: 600px) {
    .div1 {
      background-position-x: 10rem;
    }
    .innerdiv {
      display: flex;
      flex-direction: column;
      transform: scale(1);
      margin: 2rem;
      margin-bottom: 5rem;
    }
    .attribution {
      position: relative;
    }
  }
`;
