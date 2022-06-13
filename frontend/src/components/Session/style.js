import styled from 'styled-components';

export const sessionPageContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 1% auto 5% auto;
`;

export const sessionDataContainer = styled.div`
  display: flex;

  img {
    width: 30%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 3%;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const sessionSeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;

  p {
    align-self: flex-start;
    margin: 0 0 1% 4%;
  }

  hr {
    width: 95%;
    margin-bottom: 2%;
  }

  div {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-around;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #09f;
      width: 4.3%;
      margin-bottom: 2%;
      color: #09f;
      cursor: pointer;
      font-size: 70%;

      &:hover {
        background-color: #D00;
        color: white;
        font-weight: 700;
      }
    }

    .clicked {
      background-color: #D00;
      color: white;
      font-weight: 700;
    }

    .occupied {
      background-color: #333;
      color: #333;
      pointer-events: none;
    }
  }

  h4 {
    text-align: center;
    background-color: gray;
    width: 90%;
    margin: 5% auto auto auto;
  }
`;

export const sessionOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  div {
    display: flex;

    span {
      color: black;
    }
  }

  hr {
    width: 95%;
    margin: 15% auto 15% 0;
  }
    
  input {
    border-radius: 0.3rem;
    border: solid 1px;
    width: 100%;
    margin-top: 5%;
    height: 2rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #0073ff;
    color: white;
    align-self: flex-end;
  }
`;