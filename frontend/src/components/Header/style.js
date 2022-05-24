import styled from 'styled-components';

export const mainNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;

  a {
    width: 5%;
    display: flex;
    align-items: center;
    text-decoration: none;

    p {
      font-size: 2.7rem;
      margin-left: 3%;
      color: #0073ff;
      font-family: 'Proxima Nova Bold';
    }

    img {
      width: 100%;
    }
  }

  aside {
    width: 33%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    p {
      margin-right: 4%;
      color: white;
      cursor: pointer;
      
      svg {
        color: #0073ff;
      }
    }
  }
}
`;

export const supportNavContainer = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #333;
  height: 2.5rem;

  a {
    width: auto;
    margin-right: 4%;
    color: #09f;
    text-decoration: none;
    font-size: 1.2rem;

    img {
      width: 100%;
    }
  }
}
`;