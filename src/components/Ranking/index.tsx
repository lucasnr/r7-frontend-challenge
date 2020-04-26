import React, { useState, useEffect } from 'react';

import IMember from '../../types/Member';
import Member from './Member';
import { Container, List } from './styles';

import { getMembers } from '../../services/api';

const Ranking: React.FC = () => {
	const [members, setMembers] = useState<IMember[]>([]);
	useEffect(() => {
		getMembers().then(({ data }) => {
			const members: IMember[] = data.data;
			setMembers(members.sort((a, b) => (a.positive > b.positive ? -1 : 1)));
		});
	}, []);

	return (
		<Container>
			<List>
				{members.map((member, index) => (
					<Member
						key={`${member.__id}-${index}`}
						{...member}
						order={index + 1}
					/>
				))}
			</List>
		</Container>
	);
};

export default Ranking;
