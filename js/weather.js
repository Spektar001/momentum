const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector(".weather-error");
const city = document.querySelector('.city');

let startCity = 'Minsk';
city.value = startCity;

async function getWeather() {
try {
	if (localStorage.getItem("startCity")) {
    startCity = localStorage.getItem("startCity");
    city.value = startCity;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
	
	weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	weatherError.textContent = '';
	city.value = data.name;
	temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)}m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;

} catch (error) {
		weatherError.textContent = `Error! city not found for "${city.value}"!`;
		temperature.textContent = "";
		weatherDescription.textContent = "";
		wind.textContent = "";
		humidity.textContent = "";
	}
}

setTimeout(() => {
  getWeather();
}, 100);

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}
function setLocalStorageCity() {
	let city = document.querySelector(".city");
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorageCity);

function getLocalStorageCity() {
	let city = document.querySelector(".city");
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getLocalStorageCity);
city.addEventListener('keypress', setCity);