function taskPage() {
	const taskHeading = document.createElement('h1');
	const page = document.getElementById('content');
	taskHeading.textContent = 'Tasks';

  page.innerHTML = ''
	page.appendChild(taskHeading);
}

export default taskPage;
