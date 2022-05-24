import styled from 'styled-components';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  position: relative;

  span {
    display: flex;
    justify-content: space-between;
    width: 40%;

    input {
      width: 47%;
    }
  }

  div {
    width: 11.5%;
    margin-right: 28.5%;
    margin-top: 0.5%;

    p {
      font-size: 0.7rem;
      margin: 1.5px;
    }
  }

  input {
    margin-top: 1rem;
    height: 2.2rem;
    border-radius: 0.3rem;
    border: solid 1px;
    font-size: 0.9rem;
    width: 33%;

    &:focus {
      outline: none;
      border-color: #00aec9;
      box-shadow: 0 0 0 0.2rem rgba(19, 162, 228, 0.25);
    }
  }

  input[type="submit"] {
    width: 10%;
    margin-left: 30%;
    cursor: pointer;
    background-color: #0073ff;
    color: white;
  }

`;

export const ClosedEye = styled(AiFillEyeInvisible)`
  position: absolute;
  margin-top: 9.9%;
  margin-right: 4%;
  cursor: pointer;
`;

export const OpenedEye = styled(AiFillEye)`
  position: absolute;
  margin-top: 9.9%;
  margin-right: 4%;
  cursor: pointer;
`;