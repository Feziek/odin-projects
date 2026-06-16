const API_KEY = 'AZHU8VD7SNXJVQE22HYXFGF5S';

async function fetchWeather(city) {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`,
	);
	if (!response.ok) {
		throw new Error('Something went wrong. Please try again.');
	}
	const data = await response.json();

	const { address } = data;
	const days = data.days.slice(0, 6).map((day) => {
		return {
			date: day.datetime,
			condition: day.conditions,
			desc: day.description,
			temp: day.temp,
			feelslike: day.feelslike,
			tempmax: day.tempmax,
			tempmin: day.tempmin,
			humidity: day.humidity,
			windspeed: day.windspeed,
		};
	});

	return {
		address,
		days,
	};
}

export default fetchWeather;
