import { format, fromUnixTime } from 'date-fns/esm';

export default function populateDailyForecast(wd) {
  const oneDay = document.getElementById('one-day');
  const oneIcon = document.getElementById('one-weather-icon');
  const oneTemp = document.getElementById('one-temp');
  const oneDesc = document.getElementById('one-desc');
  oneDay.textContent = format(fromUnixTime(wd[1].dt), 'EEEE');
  oneIcon.src = `https://openweathermap.org/img/wn/${wd[1].weather[0].icon}@2x.png`;
  oneDesc.textContent = wd[1].weather[0].description;
  oneTemp.textContent = `${Math.floor(wd[1].temp.max)}/${Math.floor(
    wd[1].temp.min
  )}°F`;

  const twoDay = document.getElementById('two-day');
  const twoIcon = document.getElementById('two-weather-icon');
  const twoTemp = document.getElementById('two-temp');
  const twoDesc = document.getElementById('two-desc');
  twoDay.textContent = format(fromUnixTime(wd[2].dt), 'EEEE');
  twoIcon.src = `https://openweathermap.org/img/wn/${wd[2].weather[0].icon}@2x.png`;
  twoDesc.textContent = wd[2].weather[0].description;
  twoTemp.textContent = `${Math.floor(wd[2].temp.max)}/${Math.floor(
    wd[2].temp.min
  )}°F`;

  const threeDay = document.getElementById('three-day');
  const threeIcon = document.getElementById('three-weather-icon');
  const threeTemp = document.getElementById('three-temp');
  const threeDesc = document.getElementById('three-desc');
  threeDay.textContent = format(fromUnixTime(wd[3].dt), 'EEEE');
  threeIcon.src = `https://openweathermap.org/img/wn/${wd[3].weather[0].icon}@2x.png`;
  threeDesc.textContent = wd[3].weather[0].description;
  threeTemp.textContent = `${Math.floor(wd[3].temp.max)}/${Math.floor(
    wd[3].temp.min
  )}°F`;

  const fourDay = document.getElementById('four-day');
  const fourIcon = document.getElementById('four-weather-icon');
  const fourTemp = document.getElementById('four-temp');
  const fourDesc = document.getElementById('four-desc');
  fourDay.textContent = format(fromUnixTime(wd[4].dt), 'EEEE');
  fourIcon.src = `https://openweathermap.org/img/wn/${wd[4].weather[0].icon}@2x.png`;
  fourDesc.textContent = wd[4].weather[0].description;
  fourTemp.textContent = `${Math.floor(wd[4].temp.max)}/${Math.floor(
    wd[4].temp.min
  )}°F`;

  const fiveDay = document.getElementById('five-day');
  const fiveIcon = document.getElementById('five-weather-icon');
  const fiveTemp = document.getElementById('five-temp');
  const fiveDesc = document.getElementById('five-desc');
  fiveDay.textContent = format(fromUnixTime(wd[5].dt), 'EEEE');
  fiveIcon.src = `https://openweathermap.org/img/wn/${wd[5].weather[0].icon}@2x.png`;
  fiveDesc.textContent = wd[5].weather[0].description;
  fiveDay.textContent = format(fromUnixTime(wd[5].dt), 'EEEE');
  fiveTemp.textContent = `${Math.floor(wd[5].temp.max)}/${Math.floor(
    wd[5].temp.min
  )}°F`;

  const sixDay = document.getElementById('six-day');
  const sixIcon = document.getElementById('six-weather-icon');
  const sixTemp = document.getElementById('six-temp');
  const sixDesc = document.getElementById('six-desc');
  sixDay.textContent = format(fromUnixTime(wd[6].dt), 'EEEE');
  sixIcon.src = `https://openweathermap.org/img/wn/${wd[6].weather[0].icon}@2x.png`;
  sixDesc.textContent = wd[6].weather[0].description;
  sixTemp.textContent = `${Math.floor(wd[6].temp.max)}/${Math.floor(
    wd[6].temp.min
  )}°F`;

  const sevenDay = document.getElementById('seven-day');
  const sevenIcon = document.getElementById('seven-weather-icon');
  const sevenTemp = document.getElementById('seven-temp');
  const sevenDesc = document.getElementById('seven-desc');
  sevenDay.textContent = format(fromUnixTime(wd[7].dt), 'EEEE');
  sevenIcon.src = `https://openweathermap.org/img/wn/${wd[7].weather[0].icon}@2x.png`;
  sevenDesc.textContent = wd[7].weather[0].description;
  sevenTemp.textContent = `${Math.floor(wd[7].temp.max)}/${Math.floor(
    wd[7].temp.min
  )}°F`;
}
