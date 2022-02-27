//global variables vv 
//#region 
        var button = document.querySelector('.submit')
        var inputValue = document.querySelector('.input-value')
        var mainCity = document.querySelector('.main-city')
        var mainDate = document.querySelector('.date')
        var mainTemp = document.querySelector('.main-temp')
        var mainWind = document.querySelector('.main-wind')
        var mainHum = document.querySelector('.main-hum')
        var mainUv = document.querySelector('.main-uv')
        var mainDate = document.querySelector('.date')
        var mainIcon = document.querySelector('.icon')
        var mainWeatherDisplay = document.querySelector('.weather-display')
        var forecastDisplay = document.querySelector('.forecast')
        var historyContainer = document.querySelector('.left-content')
        var forecastContainer = document.querySelector('#forecast-container')
        var dayOne = document.querySelector('#day-one')
        var dayOneIcon = document.querySelector('.day-one-icon')
        var dayOneDates = document.querySelector('#day-one-date')
        var dayOneHighs = document.querySelector('#day-one-highs')
        var dayOneLows = document.querySelector('#day-one-lows')
        var dayOneWind = document.querySelector('#day-one-wind')
        var dayOneHum = document.querySelector('#day-one-hum')
        var dayTwo = document.querySelector('#day-two')
        var dayTwoIcon = document.querySelector('.day-two-icon')
        var dayTwoDates = document.querySelector('#day-two-date')
        var dayTwoHighs = document.querySelector('#day-two-highs')
        var dayTwoLows = document.querySelector('#day-two-lows')
        var dayTwoWind = document.querySelector('#day-two-wind')
        var dayTwoHum = document.querySelector('#day-two-hum')
        var dayThree = document.querySelector('#day-three')
        var dayThreeIcon = document.querySelector('.day-three-icon')
        var dayThreeDates = document.querySelector('#day-three-date')
        var dayThreeHighs = document.querySelector('#day-three-highs')
        var dayThreeLows = document.querySelector('#day-three-lows')
        var dayThreeWind = document.querySelector('#day-three-wind')
        var dayThreeHum = document.querySelector('#day-three-hum')
        var dayFour = document.querySelector('#day-four')
        var dayFourIcon = document.querySelector('.day-four-icon')
        var dayFourDates = document.querySelector('#day-four-date')
        var dayFourHighs = document.querySelector('#day-four-highs')
        var dayFourLows = document.querySelector('#day-four-lows')
        var dayFourWind = document.querySelector('#day-four-wind')
        var dayFourHum = document.querySelector('#day-four-hum')
        var dayFive = document.querySelector('#day-five')
        var dayFiveIcon = document.querySelector('.day-five-icon')
        var dayFiveDates = document.querySelector('#day-five-date')
        var dayFiveHighs = document.querySelector('#day-five-highs')
        var dayFiveLows = document.querySelector('#day-five-lows')
        var dayFiveWind = document.querySelector('#day-five-wind')
        var dayFiveHum = document.querySelector('#day-five-hum')
        var rightContent = document.querySelector('.right-content')
       
//#endregion
//Button Click Functionality

function newSearchHistory(){

    var searchHistory = document.createElement('div')
//Add input to localStorage to use later

localStorage.setItem('city', inputValue.value)

//Add input as search history button

    searchHistory.classList.add('history')
    searchHistory.innerHTML = localStorage.getItem('city')
    historyContainer.appendChild(searchHistory)

//Search history button functionality

    searchHistory.addEventListener('click', function(){
        inputValue.value = searchHistory.innerHTML
        historyContainer.removeChild(searchHistory)
        getWeather();
    })
}

function getWeather(){

    
//Remove UV index color at start of search, as well as 5 day forecast
    mainWeatherDisplay.classList.remove('hide')
    forecastDisplay.classList.remove('hide')
    rightContent.classList.remove('hide')
    mainUv.classname = '';

//Fetch to find coordinates and city name based on user input

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=7930f77cca8484bf43bfc2ebd049bdcd')
    .then(response => response.json())
    .then(data => {
        var cityLat = data['coord']['lat'];
        var cityLon = data['coord']['lon'];
        var cityValue = data['name'];
        var icon = data['weather']['0']['icon'];
    
  
//Use name and coordinates we just aquired to fetch weather data

fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+cityLat+'&lon='+cityLon+'&units=imperial&appid=7930f77cca8484bf43bfc2ebd049bdcd')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var cityTemp = data['current']['temp'];
        var cityWind = data['current']['wind_speed'];
        var cityHum = data['current']['humidity'];
        var cityUv = data['current']['uvi'];

    
newSearchHistory();
    
        
//5 day forecast data
//#region 

//day 1

        var dayOneTempHigh = data['daily']['1']['temp']['max']
        var dayOneTempLow = data['daily']['1']['temp']['min']
        var dayOneWindData = data['daily']['1']['wind_speed']
        var dayOneHumData = data['daily']['1']['humidity']
        var dayOneIconData = data['daily']['1']['weather']['0']['icon']
      

//day 2

        var dayTwoTempHigh = data['daily']['2']['temp']['max']
        var dayTwoTempLow = data['daily']['2']['temp']['min']
        var dayTwoWindData = data['daily']['2']['wind_speed']
        var dayTwoHumData = data['daily']['2']['humidity']
        var dayTwoIconData = data['daily']['2']['weather']['0']['icon']

//day 3

        var dayThreeTempHigh = data['daily']['3']['temp']['max']
        var dayThreeTempLow = data['daily']['3']['temp']['min']
        var dayThreeWindData = data['daily']['3']['wind_speed']
        var dayThreeHumData = data['daily']['3']['humidity']
        var dayThreeIconData = data['daily']['3']['weather']['0']['icon']

//day 4

        var dayFourTempHigh = data['daily']['4']['temp']['max']
        var dayFourTempLow = data['daily']['4']['temp']['min']
        var dayFourWindData = data['daily']['4']['wind_speed']
        var dayFourHumData = data['daily']['4']['humidity']
        var dayFourIconData = data['daily']['4']['weather']['0']['icon']

//day 5

        var dayFiveTempHigh = data['daily']['5']['temp']['max']
        var dayFiveTempLow = data['daily']['5']['temp']['min']
        var dayFiveWindData = data['daily']['5']['wind_speed']
        var dayFiveHumData = data['daily']['5']['humidity']
        var dayFiveIconData = data['daily']['5']['weather']['0']['icon']
//#endregion
//Get Dates
//#region 
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
//#endregion
//update 5 day forescast
//#region 
//Day 1 -------------------------->

dayOne.classList.add('forecast-container')
dayOneDates.innerHTML = 'Tomorrow'
dayOneHighs.innerHTML = 'Highs of: ' + Math.round(dayOneTempHigh) + '°F'
dayOneLows.innerHTML = 'Lows of: ' + Math.round(dayOneTempLow) + '°F'
dayOneWind.innerHTML = 'Wind: ' + dayOneWindData + ' mph'
dayOneHum.innerHTML = 'Humidity: ' + dayOneHumData
dayOneIcon.innerHTML = '<img src=http://openweathermap.org/img/wn/'+dayOneIconData+'@2x.png>'


//Day 2 -------------------------->

dayTwo.classList.add('forecast-container')
dayTwoDates.innerHTML = dayTwoDate
dayTwoHighs.innerHTML = 'Highs of: ' + Math.round(dayTwoTempHigh) + '°F'
dayTwoLows.innerHTML = 'Lows of: ' + Math.round(dayTwoTempLow) + '°F'
dayTwoWind.innerHTML = 'Wind: ' + dayTwoWindData + ' mph'
dayTwoHum.innerHTML = 'Humidity: ' + dayTwoHumData
dayTwoIcon.innerHTML = '<img src=http://openweathermap.org/img/wn/'+dayTwoIconData+'@2x.png>'


//Day 3 -------------------------->

dayThree.classList.add('forecast-container')
dayThreeDates.innerHTML = dayThreeDate
dayThreeHighs.innerHTML = 'Highs of: ' + Math.round(dayThreeTempHigh) + '°F'
dayThreeLows.innerHTML = 'Lows of: ' + Math.round(dayThreeTempLow) + '°F'
dayThreeWind.innerHTML = 'Wind: ' + dayThreeWindData + ' mph'
dayThreeHum.innerHTML = 'Humidity: ' + dayThreeHumData
dayThreeIcon.innerHTML = '<img src=http://openweathermap.org/img/wn/'+dayThreeIconData+'@2x.png>'


//Day 4 -------------------------->

dayFour.classList.add('forecast-container')
dayFourDates.innerHTML = dayFourDate
dayFourHighs.innerHTML = 'Highs of: ' + Math.round(dayFourTempHigh) + '°F'
dayFourLows.innerHTML = 'Lows of: ' + Math.round(dayFourTempLow) + '°F'
dayFourWind.innerHTML = 'Wind: ' + dayFourWindData + ' mph'
dayFourHum.innerHTML = 'Humidity: ' + dayFourHumData
dayFourIcon.innerHTML = '<img src=http://openweathermap.org/img/wn/'+dayFourIconData+'@2x.png>'


//Day 5 -------------------------->

dayFive.classList.add('forecast-container')
dayFiveDates.innerHTML = dayFiveDate
dayFiveHighs.innerHTML = 'Highs of: ' + Math.round(dayFiveTempHigh) + '°F'
dayFiveLows.innerHTML = 'Lows of: ' + Math.round(dayFiveTempLow) + '°F'
dayFiveWind.innerHTML = 'Wind: ' + dayFiveWindData + ' mph'
dayFiveHum.innerHTML = 'Humidity: ' + dayFiveHumData
dayFiveIcon.innerHTML = '<img src=http://openweathermap.org/img/wn/'+dayFiveIconData+'@2x.png>'


console.log(dayFiveIconData)
//#endregion     
//Display values to main weather display

        mainCity.innerHTML = cityValue;
        mainDate.innerHTML = today
        mainIcon.innerHTML = '<img src=http://openweathermap.org/img/wn/'+icon+'@2x.png>'
        mainTemp.innerHTML = 'Temp: ' + Math.round(cityTemp) + '°F';
        mainWind.innerHTML = 'Wind: ' + cityWind + ' mph';
        mainHum.innerHTML = 'Humidity: ' + cityHum;
        mainUv.innerHTML = 'UV Index: ' + cityUv;

//conditions for UV index data to be colored based on value

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


        inputValue.value = ''

    })

})
.catch((error) => {
    mainWeatherDisplay.classList.add('hide')
    forecastDisplay.classList.add('hide')
    forecastContainer.classList.add('hide')
    rightContent.classList.add('hide')
    alert('enter a valid city name')
    inputValue.value = ''
})
}

button.addEventListener('click', function(){
    getWeather()
})




    







