import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Ranking from './components/Ranking';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<main>
				<Header />
				<Ranking />
			</main>
		</>
	);
}
