import styled from "styled-components";
import { ImCancelCircle } from 'react-icons/im';

const AlertContainer = `
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;

  p {
    margin-left: 5%;
  }
`;

export const ErrorAlertContainer = styled.div`
  ${AlertContainer}
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442
`;

export const SuccessAlert = styled.div`
  ${AlertContainer}
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
`;

export const CloseButton = styled(ImCancelCircle)`
  cursor: pointer;
  margin-right: 2%;
`;