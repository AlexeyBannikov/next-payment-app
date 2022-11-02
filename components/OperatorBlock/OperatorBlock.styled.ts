import styled from 'styled-components';

export interface IStyledOperatorBlockProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
}

export const StyledOperatorBlock = styled('div')<IStyledOperatorBlockProps>`
  display: ${(props) => props.display || 'block'};
  align-items: ${(props) => props.alignItems || 'initial'};
  justify-content: ${(props) => props.justifyContent || 'initial'};
  margin: ${(props) => props.margin || '0px'};
`;
