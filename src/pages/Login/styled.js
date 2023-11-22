import styled from 'styled-components';
import colors from '../../config/colors';

export const Form = styled.form`
  margin: 30px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 35px;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid;
    background: transparent;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

  .lst-psw {
    text-align: end;
    margin: -15px 0 20px 0;
    font-size: 0.9em;
    color: #4e4e4e;
    cursor: pointer;

    &:hover {
      color: ${colors.primaryColor};
    }
  }

  label {
    span {
      display: block;
      margin-bottom: 10px;
    }
  }

  button {
    margin-top: 15px;
    padding: 15px 0;
    font-size: 0.9em;
  }
`;

export const Design = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  /* padding: 10px 0; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  background: rgba(0, 0, 0, 0.8);
  /* display: none; */
  /* background: red; */

  section {
    margin-top: 8%;
  }
`;
