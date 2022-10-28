import React from 'react';
import styled from 'styled-components';

interface IStyledTitleProps {
  color?: string;
  textAlign?: string;
  fontSize?: string;
}

interface ITitleProps extends IStyledTitleProps {
  children: React.ReactNode;
}

export const StyledTitle = styled('h1')<IStyledTitleProps>`
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.textAlign || 'initial'};
  font-size: ${(props) => props.fontSize || '32px'};
`;

export const Title: React.FC<ITitleProps> = (props) => {
  return <StyledTitle {...props} />;
};
