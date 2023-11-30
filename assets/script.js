//weather dashboard

//variables
var resultsContainer = document.querySelector('.results');
var searchBtn = document.getElementById('search-button');
var termSpan = document.querySelector('#term');
var citySearchForm = document.querySelector('#city-search');
var clearBtn = document.getElementById('clear');
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
        var weatherNowPel = document.createElement("p");
        weatherNowPel.textContent = weatherNow
    })
};
//convert city name to lat and lon
function getCityGeoData(cityInput) {
    var cityInput = document.querySelector('#city');
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput + '&limit=5&appid=73ae999c41edfcbe7e963963ee76ff49' )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].local_names.en);
                var lat = data[i].lat;
                console.log(lat);
                var lon = data[i].lon;
                console.log(lon);
            }
        });
    };
  
  addEventListener('click', getGeoWeather);