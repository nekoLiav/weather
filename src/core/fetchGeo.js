import populateSearch from '../dom/populateSearch';

export default async function fetchGeo(formInput) {
  const isUSZIP = /\d{5}/g;
  if (!isUSZIP.test(formInput)) {
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${formInput}&limit=5&appid=961f06db876d364746ee34fafc6c8bba`
    );
    const geoData = await geoResponse.json();
    if (geoData.length > 1) {
      populateSearch(geoData);
    }
  } else {
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/zip?zip=${formInput}&limit=5&appid=961f06db876d364746ee34fafc6c8bba`
    );
    const geoData = await geoResponse.json();
    if (geoData.length > 1) {
      populateSearch(geoData);
    }
  }
}
