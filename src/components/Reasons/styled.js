import styled from 'styled-components';
// import colors from '../../config/colors';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  margin-bottom: 200px;

  .container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    margin: auto;
  }
  .container .box {
    position: relative;
    width: 275px;
    height: 275px;
    background: #000;
    transition: 0.5s;
    transform-style: preserve-3d;
    overflow: hidden;
    margin-right: 30px;
    margin-top: 45px;
    border-radius: 15px;

    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
  /* .container:hover .box {
    transform: rotateY(25deg);
  } */
  /* .container .box:hover ~ .box {
    transform: rotateY(-25deg);
  } */
  .container .box:hover {
    transform: rotateY(0deg) scale(1.25);
    z-index: 1;
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
  }
  .container .box .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .container .box .imgBx:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #add8e6, #000);
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
    mix-blend-mode: multiply;
  }
  .container .box:hover .imgBx:before {
    opacity: 1;
  }
  .container .box .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container .box .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    padding: 20px;
    align-items: flex-end;
    box-sizing: border-box;
  }
  .container .box .content h2 {
    color: #fff;
    transition: 0.5s;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 20px;
    transform: translateY(200px);
    transition-delay: 0.3s;
  }
  .container .box:hover .content h2 {
    transform: translateY(0px);
  }
  .container .box .content p {
    color: #fff;
    transition: 0.5s;
    font-size: 14px;
    transform: translateY(200px);
    transition-delay: 0.4s;
  }
  .container .box:hover .content p {
    transform: translateY(0px);
  }
`;
