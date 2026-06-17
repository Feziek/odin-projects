import '../styles/card.css';

function createCard(days) {
	const container = document.createElement('div');

	days.forEach((day, index) => {
		const dayName = new Date(day.date).toLocaleString('en-US', {
			weekday: 'long',
		});
		if (index === 0) {
			day.date = 'Today';
		}
		const {
			date,
			condition,
			desc,
			temp,
			feelslike,
			tempmax,
			tempmin,
			humidity,
			windspeed,
		} = day;

		const card = document.createElement('div');
		card.classList.add('weather-card');
		card.innerHTML = `
      <h3 class="card-date">${dayName} (${date})</h3>
      <p class="card-condition">${condition}</p>
      <p class="card-desc">${desc}</p>
      <p class="card-temp">${temp}°C</p>
      <p class="card-feels">Feels like: ${feelslike}°C</p>
      <p class="card-range">
				<span class="high">H: ${tempmax}°C</span>
				<span class="sep">/</span>
				<span class="low">L: ${tempmin}°C</span>
			</p>
      <p class="card-stat">Humidity: ${humidity}%</p>
      <p class="card-stat">Windspeed:${windspeed} Km/h</p>
    `;
		container.appendChild(card);
	});
	container.classList.add('cards-grid');
	return container;
}

export default createCard;
