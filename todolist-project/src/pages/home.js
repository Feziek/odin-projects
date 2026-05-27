function homePage() {
	const homeHeading = document.createElement('h1');
	const page = document.getElementById('content');
	homeHeading.textContent = 'Home';

	page.innerHTML = '';
	page.appendChild(homeHeading);
}

export default homePage;
