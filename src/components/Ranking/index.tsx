import React, { useState, useEffect } from 'react';

import Member from './Member';
import { Container, List } from './styles';

import { getMembers, MemberType } from '../../services/api';

const Ranking: React.FC = () => {
	const [members, setMembers] = useState<MemberType[]>([]);
	useEffect(() => {
		getMembers().then(({ data }) => {
			const members: MemberType[] = data.data;
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
