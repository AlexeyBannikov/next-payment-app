import styled from 'styled-components';

export const StyledCloseButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 28px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
