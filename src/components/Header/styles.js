import styled from 'styled-components';

import logo from '../../assets/img/logo.png';

export const Container = styled.header`
	align-items: flex-end;
	display: flex;
	height: 12rem;
	justify-content: flex-end;
	margin-bottom: 1.5rem;
	position: relative;
`;

export const Logo = styled.img`
	height: 12rem;
	left: -0.875rem;
	position: absolute;
	bottom: -0.5rem;
`;

Logo.defaultProps = {
	src: logo,
	alt: "Logomarca d'A Fazenda",
};

export const Title = styled.h1`
	background-color: #fff;
	border-radius: 0.25rem;
	color: #272727;
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: -0.25rem;
	margin-top: auto;
	padding: 0.25rem 2rem;
	text-align: right;
	text-transform: uppercase;
	width: 85%;
`;
