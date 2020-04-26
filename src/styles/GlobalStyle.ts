import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0px;
		outline: none;
		padding: 0px;
	}

	body {
		background-color: #272727;
	}

	#root {
		align-items: center;
		display: flex;
		justify-content: center;
		min-height: 100vh;
	}

	body, input, button, textarea {
		font-family: 'Montserrat', 'Arial', sans-serif;
	}

	main {
		max-width: 414px;
		padding: 1rem;
		width: 100%;
	}
`;

export default GlobalStyle;
