import fetchGeo from './core/fetchGeo';
import fetchWeather from './core/fetchWeather';
import geolocation from './core/geolocation';
import populateLocation from './dom/populateLocation';

import './styles/meyerweb-reset.css';
import './styles/style.css';

fetchWeather(40.05888, -83.0603264);
populateLocation('Columbus, OH, US');
geolocation();

const locationForm = document.getElementById('location-form');
locationForm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    fetchGeo(e.target.value);
    locationForm.reset();
    e.target.blur();
  }
});
