import homePage from './pages/home.js';
import menuPage from './pages/menu.js';
import aboutPage from './pages/about.js';
import './css/index.css';

const app = document.querySelector('#content');

function navigate(page) {
	const pages = {
		home: homePage,
		menu: menuPage,
		about: aboutPage
	};

	app.innerHTML = pages[page]?.();
}

document.querySelectorAll('[data-page]').forEach(btn =>
	btn.addEventListener('click', () => {
		navigate(btn.dataset.page);
		document.querySelector('.active').classList.remove('active');
		btn.classList.add('active')
	})
);

navigate('home');
