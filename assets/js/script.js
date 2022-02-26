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

//day 1

        var dayOneTempHigh = data['daily']['1']['max']
        var dayOneTempLow = data['daily']['1']['min']
        var dayOneWind = data['daily']['1']['wind_speed']
        var dayOneHum = data['daily']['1']['humidity']

//day 2

        var dayTwoTempHigh = data['daily']['2']['max']
        var dayTwoTempLow = data['daily']['2']['min']
        var dayTwoWind = data['daily']['2']['wind_speed']
        var dayTwoHum = data['daily']['2']['humidity']

//day 3

        var dayThreeTempHigh = data['daily']['3']['max']
        var dayThreeTempLow = data['daily']['3']['min']
        var dayThreeWind = data['daily']['3']['wind_speed']
        var dayThreeHum = data['daily']['3']['humidity']

//day 4

        var dayFourTempHigh = data['daily']['4']['max']
        var dayFourTempLow = data['daily']['4']['min']
        var dayFourWind = data['daily']['4']['wind_speed']
        var dayFourHum = data['daily']['4']['humidity']

//day 5

        var dayFiveTempHigh = data['daily']['5']['max']
        var dayFiveTempLow = data['daily']['5']['min']
        var dayFiveWind = data['daily']['5']['wind_speed']
        var dayFiveHum = data['daily']['5']['humidity']

//append 5 day forescast

var dayOne = document.createElement('div')
var dayOneTempHighEl = document.createElement('p')
dayOneTempHighEl.innerHTML = dayOneTempHigh
var dayOneTempLowEl = document.createElement('p')
dayOneTempLowEl.innerHTML = dayOneTempLow
var dayOneWindEl = document.createElement('p')
dayOneWindEl.innerHTML = dayOneWind
var dayOneHumEl = document.createElement('p')
dayOneHumEl.innerHTML = dayOneHum
dayOne.classList.add('.forecast-container')

if(dayOneHum <= 2  ){
    dayOneHumEl.classList.add('good')
}
else if(dayOneHum <= 5){
    dayOneHumEl.classList.add('moderate')
}
else if(dayOneHum <= 7){
    dayOneHumEl.classList.add('high')
}
else if(dayOneHum <= 8){
    dayOneHumEl.classList.add('very-high')
}
else{
    dayOneHumEl.classList.add('extreme')
}





var dayTwo = document.createElement('div')
var dayTwoTempHighEl = document.createElement('p')
dayTwoTempHighEl.innerHTML = dayTwoTempHigh
var dayTwoTempLowEl = document.createElement('p')
dayTwoTempLowEl.innerHTML = dayTwoTempLow
var dayTwoWindEl = document.createElement('p')
dayTwoWindEl.innerHTML = dayTwoWind
var dayTwoHumEl = document.createElement('p')
dayTwoHumEl.innerHTML = dayTwoHum
dayTwo.classList.add('.forecast-container')


if(dayTwoHum <= 2  ){
    dayTwoHumEl.classList.add('good')
}
else if(dayTwoHum <= 5){
    dayTwoHumEl.classList.add('moderate')
}
else if(dayTwoHum <= 7){
    dayTwoHumEl.classList.add('high')
}
else if(dayTwoHum <= 8){
    dayTwoHumEl.classList.add('very-high')
}
else{
    dayTwoHumEl.classList.add('extreme')
}


var dayThree = document.createElement('div')
var dayThreeTempHighEl = document.createElement('p')
dayThreeTempHighEl.innerHTML = dayThreeTempHigh
var dayThreeTempLowEl = document.createElement('p')
dayThreeTempLowEl.innerHTML = dayThreeTempLow
var dayThreeWindEl = document.createElement('p')
dayThreeWindEl.innerHTML = dayThreeWind
var dayThreeHumEl = document.createElement('p')
dayThreeHumEl.innerHTML = dayThreeHum
dayThree.classList.add('.forecast-container')

if(dayThreeHum <= 2  ){
    dayThreeHumEl.classList.add('good')
}
else if(dayThreeHum <= 5){
    dayThreeHumEl.classList.add('moderate')
}
else if(dayThreeHum <= 7){
    dayThreeHumEl.classList.add('high')
}
else if(dayThreeHum <= 8){
    dayThreeHumEl.classList.add('very-high')
}
else{
    dayThreeHumEl.classList.add('extreme')
}


var dayFour = document.createElement('div')
var dayFourTempHighEl = document.createElement('p')
dayFourTempHighEl.innerHTML = dayFourTempHigh
var dayFourTempLowEl = document.createElement('p')
dayFourTempLowEl.innerHTML = dayFourTempLow
var dayFourWindEl = document.createElement('p')
dayFourWindEl.innerHTML = dayFourWind
var dayFourHumEl = document.createElement('p')
dayFourHumEl.innerHTML = dayFourHum
dayFour.classList.add('.forecast-container')

if(dayFourHum <= 2  ){
    dayFourHumEl.classList.add('good')
}
else if(dayFourHum <= 5){
    dayFourHumEl.classList.add('moderate')
}
else if(dayFourHum <= 7){
    dayFourHumEl.classList.add('high')
}
else if(dayFourHum <= 8){
    dayFourHumEl.classList.add('very-high')
}
else{
    dayFourHumEl.classList.add('extreme')
}


var dayFive = document.createElement('div')
var dayFiveTempHighEl = document.createElement('p')
dayFiveTempHighEl.innerHTML = dayFiveTempHigh
var dayFiveTempLowEl = document.createElement('p')
dayFiveTempLowEl.innerHTML = dayFiveTempLow
var dayFiveWindEl = document.createElement('p')
dayFiveWindEl.innerHTML = dayFiveWind
var dayFiveHumEl = document.createElement('p')
dayFiveHumEl.innerHTML = dayFiveHum
dayFive.classList.add('.forecast-container')

if(dayFiveHum <= 2  ){
    dayFiveHumEl.classList.add('good')
}
else if(dayFiveHum <= 5){
    dayFiveHumEl.classList.add('moderate')
}
else if(dayFiveHum <= 7){
    dayFiveHumEl.classList.add('high')
}
else if(dayFiveHum <= 8){
    dayFiveHumEl.classList.add('very-high')
}
else{
    dayFiveHumEl.classList.add('extreme')
}

        
//Display values to weather display

        mainCity.innerHTML = cityValue;
        mainTemp.innerHTML = 'Temp: ' + cityTemp + '°F';
        mainWind.innerHTML = 'Wind: ' + cityWind + ' mph';
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



    







