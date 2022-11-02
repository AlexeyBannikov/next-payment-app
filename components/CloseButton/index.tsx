import React from 'react';
import { StyledCloseButton } from './CloseButton.styled';

interface ICloseButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const CloseButton: React.FC<ICloseButtonProps> = (props) => {
  return <StyledCloseButton {...props} />;
};
