const inputCity=document.querySelector('.search input');
const searchBtn =document.querySelector('.search  button ');
const apiKey = "b76e2377b523dd5f31ffce570a07d0c0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
  document.querySelector('.wind').innerHTML = data.wind.speed + " km/hour";
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputCity.value);
})


