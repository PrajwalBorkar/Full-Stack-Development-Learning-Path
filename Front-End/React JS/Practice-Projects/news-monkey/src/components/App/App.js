import './App.css'
import Navbar from '../Navbar/Navbar.js'
import Card from '../Card/Card.js'

export default function App () {
	return (
		<div>
			<Navbar />
			<div className="carousel">
				<Card />
			</div>
		</div>
	);
};