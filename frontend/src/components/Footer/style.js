import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  margin-top: 5%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  hr {
    width: 80%;
    margin-bottom: 1%;
  }

  p {
    opacity: 0.7;
  }

  a {
    margin-left: 2%;
    width: 2.5%;
  }

  img {
    width: 100%;
  }
`;