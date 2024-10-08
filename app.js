const key = "080776a2f40161ebb9d33bc44d39a138";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".upper input");
const searchBtn = document.querySelector(".upper button");
const weatherImg = document.querySelector(".weather-img");


 async function checkWeather(city) {
     const response = await fetch(url + city + `&appid=${key}`);
     
     if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".middle").style.display = "none";
        document.querySelector(".lower").style.display = "none";
     }else{
        let data = await response.json();

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
     document.querySelector("#min").innerHTML = data.main.temp_min;
     document.querySelector("#max").innerHTML = data.main.temp_max;
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector("#speed").innerHTML = data.wind.speed +" km/hr";
     document.querySelector(".desc").innerHTML = data.weather[0].main;
     document.querySelector(".code").innerHTML = "(" + data.sys.country + ")";
    //  document.querySelector(".desc2").innerHTML = data.weather[0].description;


     if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png";
     }
     else if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png";
     }
     else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/drizzle.png";
     }
     else if(data.weather[0].main == "Humid"){
        weatherImg.src = "images/humidity.png";
     }
     else if(data.weather[0].main == "Mist"){
        weatherImg.src = "images/mist.png";
     }
     else if(data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png";
     }
     else if(data.weather[0].main == "Snow"){
        weatherImg.src = "images/snow.png";
     }
     else if(data.weather[0].main == "Wind"){
        weatherImg.src = "images/wind.png";
     }
     else if(data.weather[0].main == "Haze"){
        weatherImg.src = "images/haze.png";
     }

     document.querySelector(".middle").style.display = "flex";
     document.querySelector(".lower").style.display = "flex";
     document.querySelector(".error").style.display = "none";

     }
    }  
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })
     
 checkWeather();



