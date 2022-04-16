export default function weatherApp() {
  const location = document.getElementById("location");
  const weatherIcon = document.getElementById("weathericon");
  const weatherTemperature = document.getElementById("weathertemperature");
  const weatherDescription = document.getElementById("weatherdescription");
  const zipInput = document.getElementById("zipinput");

  let inputZip = "43235";

  const handleInput = (e) => {
    if (e.keyCode === 13) {
      if (zipInput.value > 99950) {
        alert("Please enter a valid zip code.");
        return false;
      }
      weatherApp.inputZip = zipInput.value;
      e.target.blur();
      zipInput.value = "";
      getWeather();
    }
  };

  async function getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${weatherApp.inputZip}&units=imperial&appid=961f06db876d364746ee34fafc6c8bba`
    );
    const weatherData = await response.json();
    location.textContent = weatherData.name;
    weatherIcon.src =
      "https://openweathermap.org/img/wn/" +
      weatherData.weather[0].icon +
      "@2x.png";
    weatherTemperature.textContent =
      Math.floor(weatherData.main.temp) + "°" + " F";
    weatherDescription.textContent = weatherData.weather[0].main;
  }

  zipInput.addEventListener("keypress", handleInput);
}
