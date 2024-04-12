const apiKey = "c8bfe931b06a93b7841394a2e72c2dc0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;
const weatherIcon = document.querySelector(".weather-img");

async function checkWeather(cityName) {
    const url = apiUrl + "&q=" + cityName;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
    }
}

document.getElementById("search-button").addEventListener("click", function () {
    const cityName = document.getElementById("search-box").value;
    checkWeather(cityName);
});

document.getElementById("search-box").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const cityName = document.getElementById("search-box").value;
        checkWeather(cityName);
    }
});
