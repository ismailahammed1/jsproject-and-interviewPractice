const apikey="ea23dd0fac9acdf688b018c812a48a97";
const apiWeatherUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka"

async function checkWeather() {
    const response = await fetch(apiWeatherUrl + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);
}
checkWeather()