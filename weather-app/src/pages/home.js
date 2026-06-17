import '../styles/home.css';
import fetchWeather from '../services/fetchService.js';
import createCard from '../components/card.js';

function homePage() {
	const container = document.createElement('div');
	const heading = document.createElement('h1');
	const searchRow = document.createElement('div');
	const searchBar = document.createElement('input');
	const button = document.createElement('button');

	heading.textContent = "Ready to check today's forecast?";
	searchBar.placeholder = 'Location';
	button.textContent = 'Search';

	searchBar.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			button.click();
		}
	});

	button.addEventListener('click', () => {
		container.appendChild(renderUi());
	});

	container.classList.add('hero');
	searchRow.classList.add('search-row');

	searchRow.appendChild(searchBar);
	searchRow.appendChild(button);
	container.appendChild(heading);
	container.appendChild(searchRow);

	return container;
}

function renderUi() {
	const city = document.querySelector('input');
	const button = document.querySelector('button');
	button.disabled = true;
	let container = document.querySelector('.cardContainer');
	if (!container) {
		container = document.createElement('div');
		container.classList.add('cardContainer');
	} else {
		container.innerHTML = '';
	}

	container.appendChild(showSpinner());

	fetchWeather(city.value)
		.then((data) => {
			const { address } = data;
			const cityName = document.createElement('h2');

			cityName.textContent = address;
			cityName.classList.add('city-name');

			container.appendChild(cityName);
			container.appendChild(createCard(data.days));
		})
		.catch((err) => container.appendChild(showError(err)))
		.finally(() => {
			removeSpinner();
			document.querySelector('button').disabled = false;
		});

	city.value = '';
	return container;
}

function showError(error) {
	const errorMsg = document.createElement('p');
	errorMsg.textContent = error;
	errorMsg.classList.add('error-msg');

	return errorMsg;
}

function showSpinner() {
	let spinnerContainer = document.createElement('div');
	spinnerContainer.classList.add('loading');
	spinnerContainer.innerHTML = `
		<div class="spinner"></div>
	`;

	return spinnerContainer;
}

function removeSpinner() {
	const spinnerContainer = document.querySelector('.loading');
	if (!spinnerContainer) return;
	spinnerContainer.remove();
}
export default homePage;
