import React from 'react';
import {
  IStyledOperatorBlockProps,
  StyledOperatorBlock,
} from './OperatorBlock.styled';

interface TOperatorBlockProps extends IStyledOperatorBlockProps {
  children: React.ReactNode;
}

export const OperatorBlock: React.FC<TOperatorBlockProps> = (props) => {
  return <StyledOperatorBlock {...props} />;
};
