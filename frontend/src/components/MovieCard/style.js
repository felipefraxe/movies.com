import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const movieCardContainer = styled(Link)`
  display: flex;
  justify-content: center;
  width: 15rem;
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