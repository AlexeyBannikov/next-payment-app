import styled from 'styled-components';

import { device } from '../utils/mediaSizes';

export const PaymentForm = styled.form`
  padding: 20px;
  border-radius: 15px;
  border: none;
  background-color: #97a0a9;
  box-shadow: 0px 0px 10px rgb(84, 83, 83);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    color: white;
    font-size: 18px;
  }

  img {
    margin-right: 10px;
    border-radius: 15px;
  }

  input {
    padding: 10px;
    border-radius: 15px;
    border: none;
    font-size: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);

    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }

    &:first-of-type {
      margin-right: 10px;
    }
  }

  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;
    width: 80%;

    input {
      width: 100%;
      font-size: 22px;

      &:first-of-type {
        margin-bottom: 10px;
      }
    }
  }

  @media ${device.mobileM} {
    input {
      width: 100%;
      font-size: 18px;
    }
  }
`;
