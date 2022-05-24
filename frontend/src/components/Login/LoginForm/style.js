import styled from 'styled-components';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  position: relative;

  input {
    margin-top: 1.2%;
    height: 2.2rem;
    width: 33%;
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
    width: 10%;
    margin-left: 23.5%;
    cursor: pointer;
    background-color: #0073ff;
    color: white;
  }

  p {
    margin-right: 14%;

    a {
      color: blue;
    }
  }
`;

export const ClosedEye = styled(AiFillEyeInvisible)`
  position: absolute;
  margin-top: 6%;
  margin-left: 31%;
  cursor: pointer;
`;

export const OpenedEye = styled(AiFillEye)`
  position: absolute;
  margin-top: 6%;
  margin-left: 31%;
  cursor: pointer;
`;