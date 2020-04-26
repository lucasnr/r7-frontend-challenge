import axios from 'axios';

export interface MemberType {
	__id: string;
	name: string;
	description: string;
	picture: string;
	positive: number;
	order?: number;
}

interface MembersResponse {
	data: MemberType[];
}

export const getMembers = () =>
	axios.get<MembersResponse>(
		'https://raw.githubusercontent.com/lucasnr/r7-frontend-challenge/master/fazenda.json'
	);
