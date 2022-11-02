import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
	a {
		color: black;
		text-decoration: none;
	}

	* {
		padding: 0;
  	margin: 0;
  	list-style: none;
  	outline: none;
  	box-sizing: border-box;
  	font-family: 'Nunito', Roboto, system-ui, Tahoma, sans-serif;
	}
`;
