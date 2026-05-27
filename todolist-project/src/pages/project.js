function projectPage() {
	const projectHeading = document.createElement('h1');
	const page = document.getElementById('content');
	projectHeading.textContent = 'Projects';

	page.innerHTML = '';
	page.appendChild(projectHeading);
}

export default projectPage;
