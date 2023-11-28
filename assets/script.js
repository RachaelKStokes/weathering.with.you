//weather dashboard
//only store city names - array of strings
//two of the same box in the middle but one displays one weather api and one displays the 5 day forcast

//variables
var CitySearchForm = document.querySelector('#city=search');
var termSpan = document.querySelector('#term')


function toJSON(response) {
    return response.json();
  }
  
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
  
  function fetchData(city) {
    var url = 'hapi.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={73ae999c41edfcbe7e963963ee76ff49}ttps://www.loc.gov/' + ('search') + '/?q=' + city + '&fo=json';
  
    fetch(url)
      .then(toJSON)
      .then(displayCards);
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