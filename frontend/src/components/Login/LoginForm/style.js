import styled from 'styled-components';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5% auto 0 auto;
  width: 33%;
  height: 15rem;
  justify-content: space-around;

  div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }

  input {
    width: 100%;
    height: 2.3rem;
    border-radius: 0.3rem;
    border: solid 1px;
    font-size: 0.9rem;

    &:focus {
      outline: none;
      border-color: #00aec9;
      box-shadow: 0 0 0 0.2rem rgba(19, 162, 228, 0.25);
    }
  }

  input[type="submit"] {
    width: 30%;
    cursor: pointer;
    background-color: #0073ff;
    color: white;
    align-self: flex-end;
  }

  p {
    align-self: start;

    a {
      color: blue;
    }
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