const apikey="ea23dd0fac9acdf688b018c812a48a97";
const apiWeatherUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")
async function checkWeather(city) {
    const weatherCard = document.querySelector(".weather");
    
    if (!city) {

        weatherCard.style.display = "none";
        return; 
    }

    const response = await fetch(apiWeatherUrl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === 'Drizzle') {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === 'Mist') {
        weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main === 'Thunderstorm') {
        weatherIcon.src = "images/thunderstorm.png";
    } else if (data.weather[0].main === 'Snow') {
        weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == 'Haze') {
        weatherIcon.src = "images/haze.png";
    } else {
      
        weatherIcon.src = "";
    }
    

    weatherCard.style.display = "block";
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});


checkWeather("");


