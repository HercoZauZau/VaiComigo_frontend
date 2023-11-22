import styled from 'styled-components';
import colors from '../../config/colors';

export const Main = styled.div`
  padding: 50px;
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid;
    border-radius: 4px;
    padding: 0 15px;
    background: transparent;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

  label {
    &:nth-of-type(n + 4) {
      width: 30%;
      display: inline-block;
    }

    &:nth-of-type(5) {
      margin: 0 5% 0 5%;
    }

    span {
      display: block;
      margin-bottom: 10px;
    }
  }

  button {
    display: block;
    margin: 30px auto;
    width: 100%;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
