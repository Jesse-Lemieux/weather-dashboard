//Global Variables

var button = document.querySelector('.submit')
var inputValue = document.querySelector('.input-value')
var mainCity = document.querySelector('.main-city')
var mainDate = document.querySelector('.date')
var mainTemp = document.querySelector('.main-temp')
var mainWind = document.querySelector('.main-wind')
var mainHum = document.querySelector('.main-hum')
var mainUv = document.querySelector('.main-uv')
var mainDate = document.querySelector('.date')
var mainWeatherDisplay = document.querySelector('.weather-display')
var forecastDisplay = document.querySelector('.forecast')
var historyContainer = document.querySelector('.left-content')
var forecastContainer = document.querySelector('#forecast-container')

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

        var dayOneTempHigh = data['daily']['1']['temp']['max']
        var dayOneTempLow = data['daily']['1']['temp']['min']
        var dayOneWind = data['daily']['1']['wind_speed']
        var dayOneHum = data['daily']['1']['humidity']

//day 2

        var dayTwoTempHigh = data['daily']['2']['temp']['max']
        var dayTwoTempLow = data['daily']['2']['temp']['min']
        var dayTwoWind = data['daily']['2']['wind_speed']
        var dayTwoHum = data['daily']['2']['humidity']

//day 3

        var dayThreeTempHigh = data['daily']['3']['temp']['max']
        var dayThreeTempLow = data['daily']['3']['temp']['min']
        var dayThreeWind = data['daily']['3']['wind_speed']
        var dayThreeHum = data['daily']['3']['humidity']

//day 4

        var dayFourTempHigh = data['daily']['4']['temp']['max']
        var dayFourTempLow = data['daily']['4']['temp']['min']
        var dayFourWind = data['daily']['4']['wind_speed']
        var dayFourHum = data['daily']['4']['humidity']

//day 5

        var dayFiveTempHigh = data['daily']['5']['temp']['max']
        var dayFiveTempLow = data['daily']['5']['temp']['min']
        var dayFiveWind = data['daily']['5']['wind_speed']
        var dayFiveHum = data['daily']['5']['humidity']

//Get Dates

//today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

var today = mm + '/' + dd + '/' + yyyy;

//Tomorrow will be defined as 'Tomorrow', so this is the day after tomorrow, or 'day 2'


var dayTwoDateObj = new Date
dayTwoDateObj.setDate(dayTwoDateObj.getDate() +2)
var Twodd = dayTwoDateObj.getUTCDate()
var Twomm = dayTwoDateObj.getUTCMonth() +1
var Twoyy = dayTwoDateObj.getUTCFullYear()
var dayTwoDate = Twomm + '/' + Twodd + '/' + Twoyy


//day 3 date

var dayThreeDateObj = new Date
dayThreeDateObj.setDate(dayThreeDateObj.getDate() +3)
var Threedd = dayThreeDateObj.getUTCDate()
var Threemm = dayThreeDateObj.getUTCMonth() +1
var Threeyy = dayThreeDateObj.getUTCFullYear()
var dayThreeDate = Threemm + '/' + Threedd + '/' + Threeyy

//day 4 date

var dayFourDateObj = new Date
dayFourDateObj.setDate(dayFourDateObj.getDate() +3)
var Fourdd = dayFourDateObj.getUTCDate()
var Fourmm = dayFourDateObj.getUTCMonth() +1
var Fouryy = dayFourDateObj.getUTCFullYear()
var dayFourDate = Fourmm + '/' + Fourdd + '/' + Fouryy

//day 5 date

var dayFiveDateObj = new Date
dayFiveDateObj.setDate(dayFiveDateObj.getDate() +3)
var Fivedd = dayFiveDateObj.getUTCDate()
var Fivemm = dayFiveDateObj.getUTCMonth() +1
var Fiveyy = dayFiveDateObj.getUTCFullYear()
var dayFiveDate = Fivemm + '/' + Fivedd + '/' + Fiveyy

//append 5 day forescast

//Day 1 -------------------------->

var dayOne = document.createElement('div')
dayOne.classList.add('forecast-container')
var dayOneDateEl = document.createElement('h2')
dayOneDateEl.innerHTML = 'Tomorrow'
var dayOneTempHighEl = document.createElement('p')
dayOneTempHighEl.innerHTML = 'Highs of: ' + Math.round(dayOneTempHigh) + '°F'
var dayOneTempLowEl = document.createElement('p')
dayOneTempLowEl.innerHTML = 'Lows of: ' + Math.round(dayOneTempLow) + '°F'
var dayOneWindEl = document.createElement('p')
dayOneWindEl.innerHTML = 'Wind: ' + dayOneWind + ' mph'
var dayOneHumEl = document.createElement('p')
dayOneHumEl.innerHTML = 'Humidity: ' + dayOneHum

forecastContainer.appendChild(dayOne)
dayOne.appendChild(dayOneDateEl)
dayOne.appendChild(dayOneTempHighEl)
dayOne.appendChild(dayOneTempLowEl)
dayOne.appendChild(dayOneWindEl)
dayOne.appendChild(dayOneHumEl)



//Day 2 -------------------------->

var dayTwo = document.createElement('div')
dayTwo.classList.add('forecast-container')
var dayTwoDateEl = document.createElement('h2')
dayTwoDateEl.innerHTML = dayTwoDate
var dayTwoTempHighEl = document.createElement('p')
dayTwoTempHighEl.innerHTML = 'Highs of: ' + Math.round(dayTwoTempHigh) + '°F'
var dayTwoTempLowEl = document.createElement('p')
dayTwoTempLowEl.innerHTML = 'Lows of: ' + Math.round(dayTwoTempLow) + '°F'
var dayTwoWindEl = document.createElement('p')
dayTwoWindEl.innerHTML = 'Wind: ' + dayTwoWind + ' mph'
var dayTwoHumEl = document.createElement('p')
dayTwoHumEl.innerHTML = 'Humidity: ' + dayTwoHum

forecastContainer.appendChild(dayTwo)
dayTwo.appendChild(dayTwoDateEl)
dayTwo.appendChild(dayTwoTempHighEl)
dayTwo.appendChild(dayTwoTempLowEl)
dayTwo.appendChild(dayTwoWindEl)
dayTwo.appendChild(dayTwoHumEl)


//Day 3 -------------------------->

var dayThree = document.createElement('div')
dayThree.classList.add('forecast-container')
var dayThreeDateEl = document.createElement('h2')
dayThreeDateEl.innerHTML = dayThreeDate
var dayThreeTempHighEl = document.createElement('p')
dayThreeTempHighEl.innerHTML = 'Highs of: ' + Math.round(dayThreeTempHigh) + '°F'
var dayThreeTempLowEl = document.createElement('p')
dayThreeTempLowEl.innerHTML = 'Lows of: ' + Math.round(dayThreeTempLow) + '°F'
var dayThreeWindEl = document.createElement('p')
dayThreeWindEl.innerHTML = 'Wind: ' + dayThreeWind + ' mph'
var dayThreeHumEl = document.createElement('p')
dayThreeHumEl.innerHTML = 'Humidity: ' + dayThreeHum

forecastContainer.appendChild(dayThree)
dayThree.appendChild(dayThreeDateEl)
dayThree.appendChild(dayThreeTempHighEl)
dayThree.appendChild(dayThreeTempLowEl)
dayThree.appendChild(dayThreeWindEl)
dayThree.appendChild(dayThreeHumEl)



//Day 4 -------------------------->

var dayFour = document.createElement('div')
dayFour.classList.add('forecast-container')
var dayFourDateEl = document.createElement('h2')
dayFourDateEl.innerHTML = dayFourDate
var dayFourTempHighEl = document.createElement('p')
dayFourTempHighEl.innerHTML = 'Highs of: ' + Math.round(dayFourTempHigh) + '°F'
var dayFourTempLowEl = document.createElement('p')
dayFourTempLowEl.innerHTML = 'Lows of: ' + Math.round(dayFourTempLow) + '°F'
var dayFourWindEl = document.createElement('p')
dayFourWindEl.innerHTML = 'Wind: ' + dayFourWind + ' mph'
var dayFourHumEl = document.createElement('p')
dayFourHumEl.innerHTML = 'Humidity: ' + dayFourHum

forecastContainer.appendChild(dayFour)
dayFour.appendChild(dayFourDateEl)
dayFour.appendChild(dayFourTempHighEl)
dayFour.appendChild(dayFourTempLowEl)
dayFour.appendChild(dayFourWindEl)
dayFour.appendChild(dayFourHumEl)


//Day 5 -------------------------->

var dayFive = document.createElement('div')
dayFive.classList.add('forecast-container')
var dayFiveDateEl = document.createElement('h2')
dayFiveDateEl.innerHTML = dayFiveDate
var dayFiveTempHighEl = document.createElement('p')
dayFiveTempHighEl.innerHTML = 'Highs of: ' + Math.round(dayFiveTempHigh) + '°F'
var dayFiveTempLowEl = document.createElement('p')
dayFiveTempLowEl.innerHTML = 'Lows of: ' + Math.round(dayFiveTempLow) + '°F'
var dayFiveWindEl = document.createElement('p')
dayFiveWindEl.innerHTML = 'Wind: ' + dayFiveWind + ' mph'
var dayFiveHumEl = document.createElement('p')
dayFiveHumEl.innerHTML = 'Humidity: ' + dayFiveHum

forecastContainer.appendChild(dayFive)
dayFive.appendChild(dayFiveDateEl)
dayFive.appendChild(dayFiveTempHighEl)
dayFive.appendChild(dayFiveTempLowEl)
dayFive.appendChild(dayFiveWindEl)
dayFive.appendChild(dayFiveHumEl)


        
//Display values to weather display

        mainCity.innerHTML = cityValue;
        mainDate.innerHTML = today
        mainTemp.innerHTML = 'Temp: ' + Math.round(cityTemp) + '°F';
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



    







