const inputCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search  button ");
const weatherIcon = document.querySelector(".weather-icon");
const apiKey = "b76e2377b523dd5f31ffce570a07d0c0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    error.style.display = "block";
  }

  let data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hour";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rain.png";
  } else if ((data.weather[0].main = "Drizzle")) {
    weatherIcon.src = "img/drizzle.png";
  }

  weather.style.display = "block";
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputCity.value);
});
