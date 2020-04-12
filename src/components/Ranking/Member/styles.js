import styled from 'styled-components';

export const Image = styled.figure`
	border: 0.25rem solid #bb3639;
	border-radius: 50%;
	display: grid;
	margin-right: 1rem;
	position: relative;
	transition: border-color 0.2s ease;

	img {
		border-radius: 50%;
		height: 4rem;
		object-fit: cover;
		width: 4rem;
	}
`;

export const Order = styled.span`
	align-items: center;
	background-color: #fff;
	border: 0.0625rem solid #7a7a7a;
	border-radius: 50%;
	color: #7a7a7a;
	display: flex;
	height: 1.5rem;
	justify-content: center;
	left: 100%;
	position: absolute;
	top: 100%;
	transform: translate(-100%, -70%);
	width: 1.5rem;
`;

export const Name = styled.h2`
	color: #bb3639;
	font-size: 1rem;
	font-weight: 600;
	transition: color 0.2s ease;
`;

export const Description = styled.h5`
	color: #909090;
	font-size: 0.75rem;
	font-weight: 600;
	transition: color 0.2s ease;
`;

export const Container = styled.li`
	align-items: center;
	display: flex;
	padding: 1rem;
	transition: background-color 0.2s ease;

	&:nth-child(even) {
		background-color: #f2f0f1;
	}

	&:hover {
		background-color: #bb3639;

		& ${Image} {
			border-color: #fff;
		}

		& ${Name} {
			color: #fff;
		}

		& ${Description} {
			color: #292929;
		}
	}
`;
