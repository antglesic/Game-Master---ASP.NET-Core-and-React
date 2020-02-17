import React from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo';

const App: React.FC = () => {
	return (
		<div className="App">
			<ul>
				{cars.map((car) =>
					<li>{car.color}</li>
				)}
			</ul>
		</div>
	);
}

export default App;
