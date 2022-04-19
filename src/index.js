import fetchGeo from './core/fetchGeo';
import fetchWeather from './core/fetchWeather';
import './styles/meyerweb-reset.css';
import './styles/style.css';

// fetchWeather(40.05888, -83.0603264);
// fetchGeo(40.05888, -83.0603264);

const locationForm = document.getElementById('location-form');
locationForm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log(e.target.value);
    locationForm.reset();
  }
});
