const apikey="ea23dd0fac9acdf688b018c812a48a97";
const apiWeatherUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")
async function checkWeather(city) {
    if (!city) {
     
        return; 
    }

    const response = await fetch(apiWeatherUrl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    if (data.weather[0].main=='clouds') {
        weatherIcon.src="image/clouds.phn"
    } else  if (data.weather[0].main=='drizzle') {
        weatherIcon.src="image/drizzle.phn"
    }else  if (data.weather[0].main=='humidity') {
        weatherIcon.src="image/humidity.phn"
    } else  if (data.weather[0].main=='mist') {
        weatherIcon.src="image/mist.phn"
    }
     else  if (data.weather[0].main=='rain') {
        weatherIcon.src="image/mist.phn"
    }
     else  if (data.weather[0].main=='wind') {
        weatherIcon.src="image/wind.phn"
    }
     else {
        
    }
        
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});
checkWeather()

