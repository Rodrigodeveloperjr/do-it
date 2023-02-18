import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: "Inter", sans-serif;
		scroll-behavior: smooth;
	}
  
	:root {
		--color-primary: #8615DF;
		--color-primary-two: #570E91;
		--color-secondary: #38085C;
		--color-secondary-two: #190429;
		--color-secondary-three: #4C365C;
		--color-title: #111111;
		--color-text: #666665;
		--color-placeholder: #9E9EA7;
		--color-error: #DF1545;
		--color-sucess: #25D970;
		--color-base-default: #FFFFFF;
		--color-grey: #EEEEEE;
		--color-grey-two: #D4D4D4;
		--transparent: transparent;
		--color-white: #F5F5F5;
		--color-white-two: #F6F6F7;
	}

	body {
		background-color: var(--color-base-default);
		color: var(--color-title);
	}

	button, a {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;
