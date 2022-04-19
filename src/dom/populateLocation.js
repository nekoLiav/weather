export default async function populateLocation(ld) {
  console.log(ld);
  const currentLocation = document.getElementById('current-location');
  currentLocation.textContent = `${ld.name}, ${ld.state}, ${ld.country}`;
}
