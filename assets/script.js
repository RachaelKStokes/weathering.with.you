//weather dashboard

//variables
var resultsContainer = document.querySelector('#results');
var termSpan = document.querySelector('#term');
var cityInput = document.querySelector('#city');
var citySearchForm = document.querySelector('#city-search');

 //get the weather information for the city searched by the user
 function getGeoWeather(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?appid=73ae999c41edfcbe7e963963ee76ff49&lat=' + lat + '&lon=' + lon +'&units=imperial')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
  };
//convert city name to lat and lon
  function getCityGeoData() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?appdid=73ae999c41edfcbe7e963963ee76ff49&limit=1&q=' + cityInput )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        getGeoWeather(data.lat, data.lon);
    })
  }

  getCityGeoData();



  function displayCards(data) {
    resultsContainer.innerHTML = null;
    termSpan.textContent = data.search.query;
  
    for (var result of data.results) {
      var cardEl = document.createElement('div');
      cardEl.classList.add('card', 'mb-3', 'p-3', 'bg-light', 'text-dark');
  
      var cardBodyEl = document.createElement('div');
      cardBodyEl.classList.add('card-body');
  
      var h3El = document.createElement('h3');
      h3El.classList.add('card-title');
      h3El.textContent = result.title;
  
      var pEl = document.createElement('p');
      pEl.classList.add('card-text');
      pEl.textContent = result.description?.toString();
  
      var aEl = document.createElement('a');
      aEl.classList.add('btn', 'btn-primary');
      aEl.textContent = 'Learn more';
      aEl.href = result.url;
      aEl.target = "_blank";
  
      resultsContainer
        .appendChild(cardEl)
        .appendChild(cardBodyEl)
        .append(h3El, pEl, aEl);
    }
  }
  
  function init() {
    if (resultsContainer) {
      var params = new URLSearchParams(location.search);
      var city = params.get('city');
      //var format = params.get('format');
      fetchData(city);
    }
  }
  
  document.addEventListener('DOMContentLoaded', init);