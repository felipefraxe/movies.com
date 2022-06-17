import styled from "styled-components";

export const formContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;
  height: 50vh;

  input {
    width: 45%;
    height: 2.2rem;
    border-radius: 1.5rem;
    border: solid 0.3px;
    font-size: 0.9rem;
    padding-left: 1%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #00aec9;
      box-shadow: 0 0 0 0.2rem rgba(19, 162, 228, 0.25);
    }
  }

  input[type="submit"] {
    border-radius: 0.3rem;
    width: 15%;
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    background-color: #0073ff;
  }
`;