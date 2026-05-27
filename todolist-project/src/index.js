import homePage from './pages/home.js';
import projectPage from './pages/project.js';
import taskPage from './pages/task.js';

const navButtons = document.querySelectorAll('[data-page]');

function navigate(page) {
	const pages = {
		home: homePage,
		task: taskPage,
		project: projectPage
	};

	if (pages[page]) {
		pages[page]();
	} else {
		document.getElementById('content').innerHTML = '<h1>Page not Found!</h1>';
	}
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => navigate(btn.dataset.page))
	
});

navigate('home');
