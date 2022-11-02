import React from 'react';
import {
  StyledSubmitButton,
  SubmitButtonContainer,
} from './SubmitButton.styled';

interface ISubmitButtonProps {
  children: React.ReactNode;
  disabled: boolean;
}

export const SubmitButton: React.FC<ISubmitButtonProps> = (props) => {
  return (
    <SubmitButtonContainer>
      <StyledSubmitButton {...props} />
    </SubmitButtonContainer>
  );
};
