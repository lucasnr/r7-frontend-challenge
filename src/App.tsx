import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Ranking from './components/Ranking';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<main>
				<Header />
				<Ranking />
			</main>
		</>
	);
};

export default App;
