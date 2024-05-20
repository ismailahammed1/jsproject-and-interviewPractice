const apikey="ea23dd0fac9acdf688b018c812a48a97";
const apiWeatherUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=London"

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

async function checkWeather() {
    const response = await fetch(apiWeatherUrl + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
checkWeather()

