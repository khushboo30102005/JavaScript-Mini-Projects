const input = document.querySelector('#input');
const appContainer = document.querySelector('.app-container');
const temperature = document.querySelector('#temperature');
const searchBtn = document.querySelector('.search i');
const cityName = document.querySelector('.city');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const weatherStatus = document.querySelector('.weather-status');
const weatherStatusSext = document.querySelector('.weather-status-text');
const weatherContainer = document.querySelector('.weather');
const errorMsg = document.createElement('p');
appContainer.append(errorMsg);
let inputCity;
city.addEventListener('input', (e) => {
  inputCity = e.target.value;
});
function checkWeather() {
  const apiKey = '40133b341882596d60528825f73c8cc2';
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
      cityName.textContent = data.name;
      humidity.textContent = `${data.main.humidity}%`;
      windSpeed.textContent = `${data.wind.speed}km/h`;
      weatherContainer.classList.add('open');
       errorMsg.textContent = ''
      switch (data.weather[0].main) {
        case `${data.weather[0].main}`:
          if (`images/${data.weather[0].main}.png`) {
            weatherStatus.src = `images/${data.weather[0].main}.png`;
          } else {
            weatherStatus.src = 'images/clear.png';
          }
          weatherStatusSext.textContent = data.weather[0].main;
          break;
      }
    })
    .catch((error) => {
      errorMsg.textContent = 'INVALID CITY NAME!!!';
      weatherContainer.classList.remove('open');
    });
}
searchBtn.addEventListener('click', (e) => {
  checkWeather();
});
