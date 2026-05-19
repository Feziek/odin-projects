import '../css/home.css';

function homePage() {
	return `
			<section class="hero-section">
				<h2>Savor Simplicity, Elegant Taste</h2>
				<button>Reserve a Table</button>
			</section>
			<section class="opening-section">
				<p class="label">Sunday Table</p>
				<h2>Opening Hours</h2>
				<div class="divider"></div>
				<table class="hours-list">
					<tr>
						<td>Monday</td>
						<td>11:00 AM – 9:00 PM</td>
					</tr>
					<tr>
						<td>Tuesday</td>
						<td>11:00 AM – 9:00 PM</td>
					</tr>
					<tr>
						<td>Wednesday</td>
						<td>11:00 AM – 9:00 PM</td>
					</tr>
					<tr>
						<td>Thursday</td>
						<td>11:00 AM – 9:00 PM</td>
					</tr>
					<tr class="highlight">
						<td>Friday <span class="badge">busy</span></td>
						<td>9:00 AM – 9:00 PM</td>
					</tr>
					<tr class="highlight">
						<td>Saturday <span class="badge">busy</span></td>
						<td>9:00 AM – 9:00 PM</td>
					</tr>
					<tr>
						<td>Sunday</td>
						<td>11:00 AM – 8:00 PM</td>
					</tr>
				</table>
			</section>`;
}

export default homePage;
