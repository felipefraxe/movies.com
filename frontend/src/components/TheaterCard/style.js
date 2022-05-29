import { BsHeartFill, BsHeart } from 'react-icons/bs';
import styled from 'styled-components';

export const theaterCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid 0.5px;
  border-radius: 0.3rem;
  background-color: #444;
  width: 65%;
  height: 15rem;
  padding-left: 2%;
  margin-bottom: 2%;

  hr {
    width: 95%;
    margin-right: 2%;
    opacity: 0.3;
  }

  span {
    display: flex;
    align-items: center;

    h6 {
      font-size: 1.2rem;
      color: #09f;
      margin-left: 2%;
    }
  }

  p {
    color: white;
  }

  div {
    p {
      font-family: 'Proxima Nova';
    }
  }
`;

export const heartFill = styled(BsHeartFill)`
  color: red;
  cursor: pointer;
`;

export const heartVoid = styled(BsHeart)`
  cursor: pointer;
`;

export const timeContainer = styled.div`
  display: flex;

  a {
    margin-right: 1%;
    border: solid #0099FF 2px;
    border-radius: 0.2rem;
    padding: 2% 6% 1.5% 6%;
    color: #0099FF;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
  }
`;