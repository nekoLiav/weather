import { format, fromUnixTime } from 'date-fns/esm';

export default async function populateDailyForecast(wd) {
  console.log(wd);
  const oneMaxTemp = document.getElementById('one-max-temp');
  const oneIcon = document.getElementById('one-weather-icon');
  const oneDay = document.getElementById('one-day');
  oneMaxTemp.textContent = `High ${Math.floor(wd[1].temp.max)}°F`;
  oneIcon.src = `http://openweathermap.org/img/wn/${wd[1].weather[0].icon}@2x.png`;
  oneDay.textContent = format(fromUnixTime(wd[1].dt), 'EEEE');

  const twoMaxTemp = document.getElementById('two-max-temp');
  const twoIcon = document.getElementById('two-weather-icon');
  const twoDay = document.getElementById('two-day');
  twoMaxTemp.textContent = `High ${Math.floor(wd[2].temp.max)}°F`;
  twoIcon.src = `http://openweathermap.org/img/wn/${wd[2].weather[0].icon}@2x.png`;
  twoDay.textContent = format(fromUnixTime(wd[2].dt), 'EEEE');

  const threeMaxTemp = document.getElementById('three-max-temp');
  const threeIcon = document.getElementById('three-weather-icon');
  const threeDay = document.getElementById('three-day');
  threeMaxTemp.textContent = `High ${Math.floor(wd[3].temp.max)}°F`;
  threeIcon.src = `http://openweathermap.org/img/wn/${wd[3].weather[0].icon}@2x.png`;
  threeDay.textContent = format(fromUnixTime(wd[3].dt), 'EEEE');

  const fourMaxTemp = document.getElementById('four-max-temp');
  const fourIcon = document.getElementById('four-weather-icon');
  const fourDay = document.getElementById('four-day');
  fourMaxTemp.textContent = `High ${Math.floor(wd[4].temp.max)}°F`;
  fourIcon.src = `http://openweathermap.org/img/wn/${wd[4].weather[0].icon}@2x.png`;
  fourDay.textContent = format(fromUnixTime(wd[4].dt), 'EEEE');

  const fiveMaxTemp = document.getElementById('five-max-temp');
  const fiveIcon = document.getElementById('five-weather-icon');
  const fiveDay = document.getElementById('five-day');
  fiveMaxTemp.textContent = `High ${Math.floor(wd[5].temp.max)}°F`;
  fiveIcon.src = `http://openweathermap.org/img/wn/${wd[5].weather[0].icon}@2x.png`;
  fiveDay.textContent = format(fromUnixTime(wd[5].dt), 'EEEE');

  const sixMaxTemp = document.getElementById('six-max-temp');
  const sixIcon = document.getElementById('six-weather-icon');
  const sixDay = document.getElementById('six-day');
  sixMaxTemp.textContent = `High ${Math.floor(wd[6].temp.max)}°F`;
  sixIcon.src = `http://openweathermap.org/img/wn/${wd[6].weather[0].icon}@2x.png`;
  sixDay.textContent = format(fromUnixTime(wd[6].dt), 'EEEE');

  const sevenMaxTemp = document.getElementById('seven-max-temp');
  const sevenIcon = document.getElementById('seven-weather-icon');
  const sevenDay = document.getElementById('seven-day');
  sevenMaxTemp.textContent = `High ${Math.floor(wd[7].temp.max)}°F`;
  sevenIcon.src = `http://openweathermap.org/img/wn/${wd[7].weather[0].icon}@2x.png`;
  sevenDay.textContent = format(fromUnixTime(wd[7].dt), 'EEEE');
}
