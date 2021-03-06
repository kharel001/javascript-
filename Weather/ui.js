class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
     //   this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
       // this.dewpoint = document.getElementById('w-dewpoint');
       this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
     //   this.icon.setAttribute('src', weather.weather[0].icon);
      //  console.log(this.icon)
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`;
       // this.dewpoint.textContent = `Dewpoint:${weather.dewpoint_string}`;
       this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
    }
} 