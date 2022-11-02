import styled from 'styled-components';

export interface IStyledTitleProps {
  color?: string;
  textAlign?: string;
  fontSize?: string;
}

export const StyledTitle = styled('h1')<IStyledTitleProps>`
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.textAlign || 'initial'};
  font-size: ${(props) => props.fontSize || '32px'};
`;
