import styled from 'styled-components';

export const popUp = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: absolute;
  height: 30%;
  width: 100%;

  div {
    width: 30%;
    background-color: #181818;
    border-right: solid white 1px;
    border-height: 80%;

    button {
      border-radius: 0.3rem;
      border: solid #0073ff 1px;
      font-family: 'Proxima Nova Bold';
      font-size: 1.2rem;
      height: 2.5rem;
      width: 50%;
      margin-top: 4%;
      cursor: pointer;
      background-color: #0073ff;
      color: #181818;
    }

    p {
      color: white;
      margin-top: 3%;
      margin-bottom: 5%;
      margin-left: 6%;
    }

    a {
      margin-left: 6%;
      color: #0073ff;
      text-decoration: none;
    }
  }
`;