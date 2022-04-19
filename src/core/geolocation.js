import fetchWeather from './fetchWeather';
import fetchGeo from './fetchGeo';

export default function geolocation() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos) => {
    const { coords } = pos;
    fetchWeather(coords.latitude, coords.longitude);
    fetchGeo(coords.latitude, coords.longitude);
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}
