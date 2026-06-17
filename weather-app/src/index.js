import './styles/variables.css';
import './styles/global.css';
import homePage from './pages/home.js';

function initializeApp(page) {
	const app = document.querySelector('#root');

	app.appendChild(page());
}

initializeApp(homePage);
