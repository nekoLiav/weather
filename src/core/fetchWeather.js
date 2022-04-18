export default async function fetchWeather(lat, lon) {
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=961f06db876d364746ee34fafc6c8bba`
  );
  const weatherData = await weatherResponse.json();
  console.log(weatherData);
}
