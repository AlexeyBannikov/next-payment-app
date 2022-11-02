import React from 'react';
import { IStyledTitleProps, StyledTitle } from './Title.styled';

interface ITitleProps extends IStyledTitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<ITitleProps> = (props) => {
  return <StyledTitle {...props} />;
};
