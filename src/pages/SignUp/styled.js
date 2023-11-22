import styled from 'styled-components';
import colors from '../../config/colors';

export const Form = styled.form`
  margin: 30px;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    border: 1px solid;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 20px;
    background: transparent;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const Design = styled.div`
  position: absolute;
  /* padding: 20px; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  section {
    margin-top: 8%;
  }
`;
