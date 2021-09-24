import './App.css';
import Header from './Components/Header/Header';
import About from './Components/Header/About/About';
import Creations from './Components/Creations/Creations';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Creations />
			<Footer />
		</div>
	);
}

export default App;
