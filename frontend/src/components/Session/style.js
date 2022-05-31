import styled from 'styled-components';

export const sessionPageContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 1% auto 5% auto;
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
      width: 4%;
      margin-bottom: 2%;
      color: #09f;
      cursor: pointer;
      font-size: 0.8rem;

      &:hover {
        background-color: #e00;
        color: white;
      }
    }
  }

  h4 {
    text-align: center;
    background-color: gray;
    width: 90%;
    margin: 10% auto auto auto;
  }
`;

export const sessionOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 2px;
  width: 25%;
`;