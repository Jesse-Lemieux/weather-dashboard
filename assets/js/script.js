var button = document.querySelector('.submit')
var inputValue = document.querySelector('.input-value')
var mainCity = document.querySelector('main-city')
var mainTemp = document.querySelector('main-temp')
var mainWind = document.querySelector('main-wind')
var mainHum = document.querySelector('main-hum')
var mainUv = document.querySelector('main-uv')



button.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=7930f77cca8484bf43bfc2ebd049bdcd')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert('city name not valid!'))
    
})
    