import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const movieCardContainer = styled(Link)`
  display: flex;
  justify-content: center;
  width: 15rem;
  margin: 1% auto 1% auto ;
  cursor: pointer;

  img {
    position: relative;
    width: 100%;
  }

  h4 {
    width: 13rem;
    position: absolute;
    align-self: flex-end;
    color: white;
    padding-bottom: 1rem;
  }
`;