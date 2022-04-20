import fetchWeather from '../core/fetchWeather';
import populateLocation from './populateLocation';

export default function populateSearch(results) {
  const resultContainer = document.getElementById('location-results');

  const previousResults = document.querySelectorAll('.result-info');

  previousResults.forEach((element) => {
    element.remove();
  });

  results.forEach((result) => {
    const resultInfo = document.createElement('div');

    resultInfo.setAttribute('data-lat', result.lat);
    resultInfo.setAttribute('data-lon', result.lon);

    resultInfo.className = 'result-info';

    if (result.state !== null && result.state !== undefined) {
      resultInfo.textContent = `${result.name}, ${result.state}, ${result.country}`;
    } else {
      resultInfo.textContent = `${result.name}, ${result.country}`;
    }

    resultInfo.addEventListener('click', (e) => {
      fetchWeather(
        e.target.getAttribute('data-lat'),
        e.target.getAttribute('data-lon')
      );
      populateLocation(e.target.textContent);
    });

    resultContainer.append(resultInfo);
  });
}
