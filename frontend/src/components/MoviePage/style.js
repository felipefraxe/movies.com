import styled from 'styled-components';

export const movieDataContainer = styled.div`
  display: flex;
  width: 70%;
  margin: auto;

  img {
    width: 13rem;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 2% auto auto 2%;

    p {
      font-family: 'Proxima Nova Bold';
      font-size: 2rem;
    }
  }
`;