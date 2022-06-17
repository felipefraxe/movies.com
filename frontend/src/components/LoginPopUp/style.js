import styled from 'styled-components';

export const popUp = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: absolute;
  z-index: 1;
  height: 27%;
  width: 100%;
  
  div {
    background-color: #181818;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 2%;
    
    button {
      border-radius: 0.3rem;
      border: solid #0073ff 1px;
      font-family: 'Proxima Nova Bold';
      font-size: 1.2rem;
      height: 2.5rem;
      width: 50%;
      cursor: pointer;
      background-color: #0073ff;
      color: #181818;
    }
    
    p {
      color: white;
    }
    
    a {
      color: #0073ff;
      text-decoration: none;
    }
  }
  
  div[name="register-half"] {
    border-right: solid white 1px;
    border-radius: 2px;
  }

  div[name="login-half"] {
    border-radius: 5px;
    padding-bottom: 2.5rem;

    p {
      align-self: baseline;
    }
  }
`;