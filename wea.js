// const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
// const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// async function getWeather(city) {
//     try {
//         // Show loading state
//         document.getElementById('weatherInfo').innerHTML = '<div class="loading">Loading...</div>';
//         document.getElementById('forecast').innerHTML = '';

//         // Fetch current weather
//         const currentResponse = await fetch(
//             `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
//         );
        
//         if (!currentResponse.ok) {
//             throw new Error('City not found');
//         }
        
//         const currentData = await currentResponse.json();

//         // Fetch 5-day forecast
//         const forecastResponse = await fetch(
//             `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
//         );
//         const forecastData = await forecastResponse.json();

//         // Display the data
//         displayWeather(currentData);
//         displayForecast(forecastData);

//     } catch (error) {
//         document.getElementById('weatherInfo').innerHTML = `
//             <div class="error">❌ ${error.message}</div>
//         `;
//         document.getElementById('forecast').innerHTML = '';
//     }
// }

// function displayWeather(data) {
//     const weatherInfo = document.getElementById('weatherInfo');
    
//     const iconMap = {
//         'Clear': '☀️',
//         'Clouds': '☁️',
//         'Rain': '🌧️',
//         'Drizzle': '🌦️',
//         'Thunderstorm': '⛈️',
//         'Snow': '❄️',
//         'Mist': '🌫️',
//         'Fog': '🌫️',
//         'Haze': '🌫️'
//     };

//     const condition = data.weather[0].main;
//     const icon = iconMap[condition] || '🌤️';

//     weatherInfo.innerHTML = `
//         <div class="city-name">${data.name}, ${data.sys.country}</div>
//         <div class="temperature">${Math.round(data.main.temp)}°C</div>
//         <div class="weather-condition">${icon} ${data.weather[0].description}</div>
//         <div class="weather-details">
//             <div class="detail-item">
//                 <span class="detail-label">💧 Humidity</span>
//                 <span class="detail-value">${data.main.humidity}%</span>
//             </div>
//             <div class="detail-item">
//                 <span class="detail-label">💨 Wind Speed</span>
//                 <span class="detail-value">${Math.round(data.wind.speed * 3.6)} km/h</span>
//             </div>
//             <div class="detail-item">
//                 <span class="detail-label">🌡️ Feels Like</span>
//                 <span class="detail-value">${Math.round(data.main.feels_like)}°C</span>
//             </div>
//         </div>
//     `;
// }

// function displayForecast(data) {
//     const forecastContainer = document.getElementById('forecast');
    
//     // Get one forecast per day (every 8th item = 24 hours)
//     const dailyForecasts = data.list.filter((item, index) => index % 8 === 0);
    
//     const iconMap = {
//         'Clear': '☀️',
//         'Clouds': '☁️',
//         'Rain': '🌧️',
//         'Drizzle': '🌦️',
//         'Thunderstorm': '⛈️',
//         'Snow': '❄️',
//         'Mist': '🌫️',
//         'Fog': '🌫️',
//         'Haze': '🌫️'
//     };

//     forecastContainer.innerHTML = dailyForecasts.map(day => {
//         const date = new Date(day.dt * 1000);
//         const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
//         const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//         const condition = day.weather[0].main;
//         const icon = iconMap[condition] || '🌤️';

//         return `
//             <div class="forecast-day">
//                 <div class="forecast-date">${dayName}</div>
//                 <div class="forecast-date" style="font-size:0.8rem; color:#888;">${monthDay}</div>
//                 <div class="forecast-icon">${icon}</div>
//                 <div class="forecast-temp">${Math.round(day.main.temp)}°C</div>
//                 <div style="font-size:0.8rem; color:#666;">${day.weather[0].description}</div>
//             </div>
//         `;
//     }).join('');
// }

// // Event listeners
// document.getElementById('searchBtn').addEventListener('click', () => {
//     const city = document.getElementById('cityInput').value.trim();
//     if (city) {
//         getWeather(city);
//     }
// });

// document.getElementById('cityInput').addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         const city = document.getElementById('cityInput').value.trim();
//         if (city) {
//             getWeather(city);
//         }
//     }
// });

// // Load default city on page load
// document.addEventListener('DOMContentLoaded', () => {
//     getWeather('London');
// });


// TASK: Get a dad joke
async function getDadJoke() {
try {
// Note: Need special header for this API
const response = await fetch('https://icanhazdadjoke.com/', {
headers: {
'Accept': 'application/json'
}
});
const data = await response.json();
console.log('😂 Dad Joke:', data.joke);
} catch (error) {
console.log('Error:', error);
}
}