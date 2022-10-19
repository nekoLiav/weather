export default async function populateCurrentWeatherPrimary(cw) {
  const currentWeatherTemp = document.getElementById('current-weather-temp');
  const currentWeatherIcon = document.getElementById('current-weather-icon');
  const currentFeelsLike = document.getElementById('current-feels-like');
  const currentHumidity = document.getElementById('current-humidity');
  currentWeatherTemp.textContent = `${Math.floor(cw.temp)}°F`;
  currentWeatherIcon.src = `http://openweathermap.org/img/wn/${cw.weather[0].icon}@4x.png`;
  currentFeelsLike.textContent = `Feels like ${Math.floor(cw.feels_like)}°F`;
  currentHumidity.textContent = `Humidity: ${Math.floor(cw.humidity)}%`;
}
