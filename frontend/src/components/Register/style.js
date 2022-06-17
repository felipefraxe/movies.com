import styled from 'styled-components';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 3% auto auto auto;
  width: 40%;
  height: 19rem;
  position: relative;
  
  input {
    height: 2.2rem;
    border-radius: 0.3rem;
    border: solid 1px;
    font-size: 0.9rem;
    width: 33%;
    padding-left: 1%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #00aec9;
      box-shadow: 0 0 0 0.2rem rgba(19, 162, 228, 0.25);
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    width: 100%;

    input {
      width: 47%;
    }
  }

  div[name="password-div"] {
    display: flex;
    width: 47%;
    align-self: start;
    position: relative;
    align-items: center;
    justify-content: flex-end;

    input {
      width: 100%;
    }
  }
  
  div[name="recommendation-div"] {
    align-self: flex-start;

    p {
      font-size: 0.7rem;
      margin: 1.5px;
    }
  }

  input[type="submit"] {
    width: 20%;
    cursor: pointer;
    background-color: #0073ff;
    color: white;
    align-self: flex-end;
  }

`;

export const ClosedEye = styled(AiFillEyeInvisible)`
  position: absolute;
  cursor: pointer;
  margin-right: 2%;
`;

export const OpenedEye = styled(AiFillEye)`
  position: absolute;
  cursor: pointer;
  margin-right: 2%;
`;