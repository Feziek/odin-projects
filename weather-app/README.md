# Raindar

A clean, minimal weather app that gives you today's conditions and a 5-day forecast for any city in the world.

Built with vanilla JavaScript, Webpack 5, and the Visual Crossing Weather API.

**[Live Demo →](https://raindar.netlify.app)**

---

## Features

- Search weather by city name
- Today's weather card — temperature, feels like, high/low, humidity, wind speed, and conditions
- 5-day forecast with the same detail per day
- Loading spinner while fetching
- Error feedback for invalid cities or failed requests
- Metric units (°C, km/h)

---

## Tech Stack

- **Vanilla JavaScript** (ES6 modules)
- **Webpack 5** — module bundling with separate dev/prod configs
- **Visual Crossing Weather API** — weather data
- **CSS** — custom sky blue glassmorphism theme
- **Netlify** — deployment

---

## Architecture

Follows a **service → component → page** pattern:

```
src/
├── services/
│   └── fetchService.js   # API calls, data trimming, error propagation
├── components/
│   └── card.js           # Renders a single day's weather card
├── pages/
│   └── home.js           # Orchestrates UI, spinner, error state, and card rendering
└── styles/
    └── home.css
```

- **Services** own everything API-related — fetching, trimming the response, and throwing errors
- **Components** are pure DOM builders — they receive data and return elements
- **Pages** orchestrate the flow — they talk to services and components, and own loading/error states

---

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
# Clone the monorepo
git clone https://github.com/Feziek/odin-projects.git
cd odin-projects/weather-app

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for production

```bash
npm run build
```

---

## API

Weather data is provided by [Visual Crossing](https://www.visualcrossing.com/).

The app fetches a 5-day forecast using the Timeline API:

```
GET /VisualCrossingWebServices/rest/services/timeline/{city}
    ?unitGroup=metric
    &key={API_KEY}
    &contentType=json
```

The following fields are extracted from the response:

| Field       | Source                                |
| ----------- | ------------------------------------- |
| City        | `address`                             |
| Date        | `days[n].datetime`                    |
| Condition   | `days[n].conditions`                  |
| Description | `days[n].description`                 |
| Temperature | `days[n].temp`                        |
| Feels like  | `days[n].feelslike`                   |
| High / Low  | `days[n].tempmax` / `days[n].tempmin` |
| Humidity    | `days[n].humidity`                    |
| Wind speed  | `days[n].windspeed`                   |

---

## Deployment

Deployed via Netlify from the `odin-projects` monorepo.

- **Base directory:** `weather-app`
- **Build command:** `npm run build`
- **Publish directory:** `weather-app/dist`

---

## Part of

[odin-projects](https://github.com/Feziek/odin-projects) — a monorepo of projects built through [The Odin Project](https://www.theodinproject.com/) curriculum.
