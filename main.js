const apiKey = "b76e2377b523dd5f31ffce570a07d0c0";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore&appid=${apiKey}`;

async function checkWeather() {
  const response = await fetch(apiUrl);
  var data = await response.json();

  console.log(data);
}
checkWeather();
