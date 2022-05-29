import styled from 'styled-components';

export const movieDataContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 3% auto auto auto;

  img {
    width: 14rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2% 0 17% 2%;

    h3 {
      font-family: 'Proxima Nova Bold';
      font-size: 2rem;
    }
  }
`;

export const sessionsDataContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: flex-start;
  margin: 3% auto auto auto;
`;

export const genreContainer = styled.span`
  display: flex;
  width: 14rem;

  p {
    font-size: 0.9rem;
    padding: 2.5%;
    margin-right: 3%;
    border: solid #CCC 2px;
    border-radius: 6.5rem;
  }
`;

export const otherDataContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 16rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;

    img {
      margin-right: 3%;
      width: 3rem;
    }
  }
`;