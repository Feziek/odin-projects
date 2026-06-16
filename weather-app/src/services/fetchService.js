const API_KEY = 'AZHU8VD7SNXJVQE22HYXFGF5S';

async function fetchWeather(city) {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${API_KEY}&contentType=json`,
		);
		if (!response.ok) {
			throw new Error('Something went wrong. Please try again.');
		}
		return await response.json();	
	}

export default fetchWeather;
