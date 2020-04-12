import axios from 'axios';

export const getData = () =>
	axios.get(
		'https://raw.githubusercontent.com/lucasnr/r7-frontend-challenge/master/fazenda.json'
	);
