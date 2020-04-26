import React from 'react';

import { Container, Image, Name, Description, Order } from './styles';

import IMember from '../../../types/Member';

const Member: React.FC<IMember> = ({ name, picture, description, order }) => {
	return (
		<Container>
			<Image>
				<img src={picture} alt={`Fotografia de ${name}`} />

				<Order>{order}</Order>
			</Image>

			<div>
				<Name>{name}</Name>
				<Description>{description}</Description>
			</div>
		</Container>
	);
};

export default Member;
