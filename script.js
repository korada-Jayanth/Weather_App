let Weather  = {
    "apiKey":"ca9df1d0c2c295f274e659180b1ab887",
    fetchWeather : function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +
              "&units=metric&appid=" +
              this.apiKey
          )   
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon,description} = data.weather[0];
        const{temp,humidity} = data.main;
        const{speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =  "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
};
document.querySelector(".search button").addEventListener("click",function(){
    Weather.search();
});
document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      Weather.search();
    }
  });
  Weather.fetchWeather("Chennai");