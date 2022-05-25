import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5%;

  p {
    opacity: 0.7;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 10%;

    a {
      img {
        width: 2rem;
      }
    }
  }

`;