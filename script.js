
//https://api.openweathermap.org/data/2.5/weather?q=Germany&appid=63fa81814f5ecd721a53968f424f8f70&units=metric

const apiKey = '63fa81814f5ecd721a53968f424f8f70';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchbox = document.querySelector(".serach input");
const searchbtn = document.querySelector(".serach button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.scr = "images/clouds.png"
    } 
     else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
     else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
     else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/Drizzle.png"
    }
     else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }

}


searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})

