export default async function populateLocation(location) {
  const currentLocation = document.getElementById('current-location');
  currentLocation.textContent = location;
}
