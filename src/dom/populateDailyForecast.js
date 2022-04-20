import { format, fromUnixTime } from 'date-fns/esm';

export default async function populateDailyForecast(wd) {
  console.log(wd);
  const oneTemp = document.getElementById('one-temp');
  const oneIcon = document.getElementById('one-weather-icon');
  const oneDay = document.getElementById('one-day');
  oneTemp.textContent = `${Math.floor(wd[1].temp.max)}/${Math.floor(
    wd[1].temp.min
  )}°F`;
  oneIcon.src = `http://openweathermap.org/img/wn/${wd[1].weather[0].icon}@2x.png`;
  oneDay.textContent = format(fromUnixTime(wd[1].dt), 'EEEE');

  const twoTemp = document.getElementById('two-temp');
  const twoIcon = document.getElementById('two-weather-icon');
  const twoDay = document.getElementById('two-day');
  twoTemp.textContent = `${Math.floor(wd[2].temp.max)}/${Math.floor(
    wd[2].temp.min
  )}°F`;
  twoIcon.src = `http://openweathermap.org/img/wn/${wd[2].weather[0].icon}@2x.png`;
  twoDay.textContent = format(fromUnixTime(wd[2].dt), 'EEEE');

  const threeTemp = document.getElementById('three-temp');
  const threeIcon = document.getElementById('three-weather-icon');
  const threeDay = document.getElementById('three-day');
  threeTemp.textContent = `${Math.floor(wd[3].temp.max)}/${Math.floor(
    wd[3].temp.min
  )}°F`;
  threeIcon.src = `http://openweathermap.org/img/wn/${wd[3].weather[0].icon}@2x.png`;
  threeDay.textContent = format(fromUnixTime(wd[3].dt), 'EEEE');

  const fourTemp = document.getElementById('four-temp');
  const fourIcon = document.getElementById('four-weather-icon');
  const fourDay = document.getElementById('four-day');
  fourTemp.textContent = `${Math.floor(wd[4].temp.max)}/${Math.floor(
    wd[4].temp.min
  )}°F`;
  fourIcon.src = `http://openweathermap.org/img/wn/${wd[4].weather[0].icon}@2x.png`;
  fourDay.textContent = format(fromUnixTime(wd[4].dt), 'EEEE');

  const fiveTemp = document.getElementById('five-temp');
  const fiveIcon = document.getElementById('five-weather-icon');
  const fiveDay = document.getElementById('five-day');
  fiveTemp.textContent = `${Math.floor(wd[5].temp.max)}/${Math.floor(
    wd[5].temp.min
  )}°F`;
  fiveIcon.src = `http://openweathermap.org/img/wn/${wd[5].weather[0].icon}@2x.png`;
  fiveDay.textContent = format(fromUnixTime(wd[5].dt), 'EEEE');

  const sixTemp = document.getElementById('six-temp');
  const sixIcon = document.getElementById('six-weather-icon');
  const sixDay = document.getElementById('six-day');
  sixTemp.textContent = `${Math.floor(wd[6].temp.max)}/${Math.floor(
    wd[6].temp.min
  )}°F`;
  sixIcon.src = `http://openweathermap.org/img/wn/${wd[6].weather[0].icon}@2x.png`;
  sixDay.textContent = format(fromUnixTime(wd[6].dt), 'EEEE');

  const sevenTemp = document.getElementById('seven-temp');
  const sevenIcon = document.getElementById('seven-weather-icon');
  const sevenDay = document.getElementById('seven-day');
  sevenTemp.textContent = `${Math.floor(wd[7].temp.max)}/${Math.floor(
    wd[7].temp.min
  )}°F`;
  sevenIcon.src = `http://openweathermap.org/img/wn/${wd[7].weather[0].icon}@2x.png`;
  sevenDay.textContent = format(fromUnixTime(wd[7].dt), 'EEEE');
}
