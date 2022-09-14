/// Search City & Temperature

function showTemperature(response) {
    document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
   document.querySelector("h4").innerHTML =
     response.data.weather[0].main;
}

function searchCity (city) {
  let apiKey = "1d902877e8d83fd02173d9d07b20da1a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function enterCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${cityInput.value}`;
  let city = `${cityInput.value}`;
searchCity(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", enterCity);


/// Search Current Location

function searchLocation(position) {
  let apiKey = "1d902877e8d83fd02173d9d07b20da1a";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentLocation);

// Current Date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
let h3 = document.querySelector("h3");
h3.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

// Fahrenheit - Celsius

function celsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 29;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", celsius);

function fahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 84.2;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", fahrenheit);

searchCity("Rome");
