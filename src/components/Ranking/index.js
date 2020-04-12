import React, { useState, useEffect } from 'react';

import Member from './Member';
import { Container, List } from './styles';

import { getData } from '../../services/api';

export default function Ranking() {
	const [members, setMembers] = useState([]);
	useEffect(() => {
		getData().then(({ data }) => {
			const members = data.data;
			setMembers(members.sort((a, b) => (a.positive > b.positive ? -1 : 1)));
		});
	}, []);

	return (
		<Container>
			<List>
				{members.map((member, index) => (
					<Member key={`${member.id}-${index}`} {...member} order={index + 1} />
				))}
			</List>
		</Container>
	);
}
