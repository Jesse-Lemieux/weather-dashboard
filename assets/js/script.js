//Variables

var button = document.querySelector('.submit')
var inputValue = document.querySelector('.input-value')
var mainCity = document.querySelector('.main-city')
var mainTemp = document.querySelector('.main-temp')
var mainWind = document.querySelector('.main-wind')
var mainHum = document.querySelector('.main-hum')
var mainUv = document.querySelector('.main-uv')

//Button Click Functionality

button.addEventListener('click', function(){

//Fetch to find coordinates and city name

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=7930f77cca8484bf43bfc2ebd049bdcd')
    .then(response => response.json())
    .then(data => {
        var cityLat = data['coord']['lat'];
        var cityLon = data['coord']['lon'];
        var cityValue = data['name'];
  
//Use name and coordinates we just aquired to fetch weather data

fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+cityLat+'&lon='+cityLon+'&units=imperial&appid=7930f77cca8484bf43bfc2ebd049bdcd')
    .then(response => response.json())
    .then(data => {
        var cityTemp = data['current']['temp'];
        var cityWind = data['current']['wind_speed'];
        var cityHum = data['current']['humidity'];
        var cityUv = data['current']['uvi'];
        
//Display values ro weather display

        mainCity.innerHTML = cityValue;
        mainTemp.innerHTML = 'Temp: ' + cityTemp + '°F';
        mainWind.innerHTML = 'Wind: ' + cityWind;
        mainHum.innerHTML = 'Humidity: ' + cityHum;
        mainUv.innerHTML = 'UV Index: ' + cityUv;
        
        //console.log('name', cityValue, 'temp', cityTemp, 'wind', cityWind, 'hum', cityHum, 'uv',cityUv)
    })
})
})

    







