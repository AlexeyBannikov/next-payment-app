import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
	0% {
    opacity: 1;
  }
  
  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

export const ListItem = styled.li`
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 5px 7px #c8c8c8;
  background: linear-gradient(to right, #3591f3, #5475ed);

  &:hover {
    animation: ${opacityAnimation} 1.25s infinite linear;
  }

  span {
    color: white;
    font-size: 18px;
  }

  img {
    margin-right: 10px;
    border-radius: 15px;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
