//weather dashboard

//variables
var resultsContainer = document.querySelector('.results');
var searchBtn = document.getElementById('search-button');
var termSpan = document.querySelector('#term');
var citySearchForm = document.querySelector('#city-search');
var forecast = document.querySelector('#day-forecast');
var day1 = document.querySelector('#day1');
var day2 = document.querySelector('#day2');
var day3 = document.querySelector('#day3');
var day4 = document.querySelector('#day4');
var day5 = document.querySelector('#day5');
//var Time = dayjs().hour(12);

//get the weather information for the city searched by the user
function getGeoWeather(lat, lon) {

    fetch('https://api.openweathermap.org/data/2.5/forecast?appid=73ae999c41edfcbe7e963963ee76ff49&lat=' + lat + '&lon=' + lon + '&units=imperial')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var weatherNow = data.list[0].main.temp;
        console.log(weatherNow);
        var weatherNowPel = document.createElement("p");
        weatherNowPel.textContent = weatherNow;
        forecast.appendChild(weatherNowPel);
        termSpan.textContent = data.city.name;
        
    })
};
//convert city name to lat and lon
function getCityGeoData() {
    var cityInput = document.querySelector('#city').value;
    fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + cityInput + '&limit=5&appid=73ae999c41edfcbe7e963963ee76ff49' )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
                var lat = data[0].lat;
                console.log(lat);
                var lon = data[0].lon;
                console.log(lon);
                getGeoWeather(lat, lon);
        });
    }
  
  searchBtn.addEventListener('click', function(event) {
    event.preventDefault()
    getCityGeoData();
  });