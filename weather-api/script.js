async function getWeather() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=14.65&longitude=121.03&current_weather=true");
    const data = await response.json()
    return data
}

getWeather()
.then((value) => {
  document.getElementById("try").innerHTML = `temperature: ${value.current_weather.temperature}`
  console.log(value)
})