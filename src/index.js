import selfIcon from './assets/HeartLogoNoBkg.svg';
import odinIcon from './assets/OdinLogo.svg';
import fetchGeo from './core/fetchGeo';
import fetchWeather from './core/fetchWeather';
import geolocation from './core/geolocation';
import populateLocation from './dom/populateLocation';
import './styles/meyerweb-reset.css';
import './styles/style.css';

const selfContainer = document.createElement('a');
const odinIconContainer = document.createElement('a');
const selfIconImg = new Image();
const odinIconImg = new Image();

selfIconImg.src = selfIcon;
selfContainer.href = 'https://github.com/nekoLiav';
odinIconImg.src = odinIcon;
odinIconContainer.href = 'https://www.theodinproject.com/';
selfContainer.id = 'self-container';
selfIconImg.id = 'self-icon';
odinIconContainer.id = 'odin-container';
odinIconImg.id = 'odin-icon';

selfContainer.append(selfIconImg);
odinIconContainer.append(odinIconImg);
document.getElementById('footer').append(selfContainer, odinIconContainer);

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
