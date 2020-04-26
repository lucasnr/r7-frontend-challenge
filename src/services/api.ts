import axios from 'axios';

import IMember from '../types/Member';

interface MembersResponse {
	data: IMember[];
}

export const getMembers = () =>
	axios.get<MembersResponse>(
		'https://raw.githubusercontent.com/lucasnr/r7-frontend-challenge/master/fazenda.json'
	);
