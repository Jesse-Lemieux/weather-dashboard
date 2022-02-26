//Global Variables

var button = document.querySelector('.submit')
var inputValue = document.querySelector('.input-value')
var mainCity = document.querySelector('.main-city')
var mainTemp = document.querySelector('.main-temp')
var mainWind = document.querySelector('.main-wind')
var mainHum = document.querySelector('.main-hum')
var mainUv = document.querySelector('.main-uv')
var mainDate = document.querySelector('.date')
var mainWeatherDisplay = document.querySelector('.weather-display')
var forecastDisplay = document.querySelector('.forecast')
var historyContainer = document.querySelector('.left-content')

//Button Click Functionality

button.addEventListener('click', function(){

//Remove UV index color at start of search

    mainUv.classname = '';

//Fetch to find coordinates and city name based on user input

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
        console.log(data)
        var cityTemp = data['current']['temp'];
        var cityWind = data['current']['wind_speed'];
        var cityHum = data['current']['humidity'];
        var cityUv = data['current']['uvi'];
        
//5 day forecast data


        
//Display values to weather display

        mainCity.innerHTML = cityValue;
        mainTemp.innerHTML = 'Temp: ' + cityTemp + '°F';
        mainWind.innerHTML = 'Wind: ' + cityWind;
        mainHum.innerHTML = 'Humidity: ' + cityHum;
        mainUv.innerHTML = 'UV Index: ' + cityUv;

//conditions for UV data to be colored based on value

        if(cityUv <= 2  ){
            mainUv.classList.add('good')
        }
        else if(cityUv <= 5){
            mainUv.classList.add('moderate')
        }
        else if(cityUv <= 7){
            mainUv.classList.add('high')
        }
        else if(cityUv <= 8){
            mainUv.classList.add('very-high')
        }
        else{
            mainUv.classList.add('extreme')
        }


//Append input to search history

        var searchHistory = document.createElement('div')
        searchHistory.classList.add('history')
        searchHistory.innerHTML = cityValue
        historyContainer.appendChild(searchHistory)
        

//Making containers that hold weather elements appear on page

        mainWeatherDisplay.classList.remove('hide')
        forecastDisplay.classList.remove('hide')

//


    })
})
})



    







