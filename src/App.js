import { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Library from './components/Library';
import Description from './components/Description';

function App() {
	const [book, setBook] = useState(null);

	return (
		<div className='App'>
                <Header />
                <Navbar />
			<div className='container'>
				<Library setBook={setBook} book={book} />
				{book && <Description book={book} />}
			</div>
		</div>
	);
}

export default App;
