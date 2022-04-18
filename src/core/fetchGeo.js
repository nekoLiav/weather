export default async function fetchGeo(lat, lon) {
  const geoResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=961f06db876d364746ee34fafc6c8bba`
  );
  const geoData = await geoResponse.json();
  console.log(geoData);
}
