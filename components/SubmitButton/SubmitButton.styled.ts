import styled from 'styled-components';

export const StyledSubmitButton = styled('button').attrs({
  type: 'submit',
})`
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  background-color: rgb(192, 117, 117);
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgb(192, 117, 117);

  &:active {
    position: relative;
    top: 4px;
    box-shadow: 0px 0px 7px rgb(192, 117, 117);
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
