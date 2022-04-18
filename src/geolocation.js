import fetchGeo from './fetchGeo';
import fetchWeather from './fetchWeather';

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

    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Accuracy: About ${coords.accuracy}`);
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}
