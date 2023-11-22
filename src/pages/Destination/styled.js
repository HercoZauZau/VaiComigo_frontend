import styled from 'styled-components';

export const Main = styled.main`
  background: #edf2f8;
`;

export const Gallery = styled.div`
  text-align: center;
  margin: 50px auto;
  height: fit-content;

  .add {
    padding: 150px 3px 0 3px;
    width: fit-content;
    border-radius: 15px;
    border: 1px solid;
    display: inline-block;
    background-color: #f2f2f2;
    margin: 0 40px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h1 {
      color: #000000;
      font-size: 1.5em;
      margin: -20px 0 10px 0;
      font-style: italic;
    }

    &:hover {
      background-color: #fff;
    }

    .plus {
      width: 250px;

      svg,
      img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        color: #000000;
        margin: 0 50px 130px 50px;
      }
    }
  }

  .edit {
    text-align: center;
    border: 2px solid;
    position: relative;
    left: 4px;
    top: -332px;
    background-color: #fff;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;

    &:hover {
      background-color: grey;
    }
  }

  .picture {
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    margin: 50px 40px;
    display: inline-block;
    border-radius: 15px;
    background: #fff;
    color: #000000;
    padding: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: left;

    &:hover {
      background: #f2f2f2;
    }
  }

  img {
    width: 250px;
    height: 270px;
    border-radius: 15px 15px 0 0;
  }

  .pic-data {
    padding: 10px;

    h5 {
      margin-bottom: 10px;
    }

    span {
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

export const Cover = styled.img`
  width: calc(100% - 10px);
  height: 300px;
  margin: auto;
`;
