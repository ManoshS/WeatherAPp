//https://api.openweathermap.org/data/2.5/weather?q=Londen&appid=70873155824e4d15a960df64c9710642
const apikey = "70873155824e4d15a960df64c9710642"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiurl + city + '&appid=' + apikey);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png"
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png"
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png"
        } else if (data.weather[0].main == "Snow") {
            weathericon.src = "images/snow.png"


        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})