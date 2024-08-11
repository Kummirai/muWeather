const input = document.querySelector('input');
const feelslike = document.querySelector('.feels-like');
const weatherDescription = document.querySelector('.weather-description');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset'); 
const currentTemp = document.querySelector('.current-temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const day2 = document.querySelector('.day2');
const day1 = document.querySelector('.day1');
const day3 = document.querySelector('.day3');
const day4 = document.querySelector('.day4');
const day5 = document.querySelector('.day5');
const day6 = document.querySelector('.day6');
const day7 = document.querySelector('.day7');

const date1 = document.querySelector('.date1');
const date2 = document.querySelector('.date2');
const date3 = document.querySelector('.date3');
const date4 = document.querySelector('.date4');
const date5 = document.querySelector('.date5');
const date6 = document.querySelector('.date6');
const date7 = document.querySelector('.date7');

const address = document.querySelector('.address');

const weatheriCon = document.querySelectorAll('.weatheriCon');
const copyright = document.querySelector('.copyright'); 

const days = ["SUN", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const date = new Date();
const currentDay = date.getDay();
const year = date.getFullYear();

dayOne = days[currentDay + 1];
dayTwo = days[currentDay + 2];
dayThree = days[currentDay + 3]
dayFour = days[currentDay + 4]
dayFive = days[currentDay + 5]
daySix = days[currentDay + 6]
daySeven = days[currentDay + 7]




function getWeather(city) {
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=J9DYF6NJRYFNEE5XBM79XG3X6&contentType=json`, {
  "method": "GET",
  "headers": {}
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    
    address.innerHTML = `${data.resolvedAddress}`
    
    feelslike.innerHTML = `Feels like ${data.currentConditions.feelslike} &#8451;`;
    weatherDescription.innerHTML = data.description;
    sunrise.innerHTML =`Sunrise ${data.currentConditions.sunrise}`;
    sunset.innerHTML =`Sunset ${data.currentConditions.sunset}`;
    currentTemp.innerHTML = `${data.currentConditions.feelslike} &#8451;`;
    humidity.innerHTML = `Humidity : ${data.currentConditions.humidity} %`;
    wind.innerHTML = `Wind : ${data.currentConditions.windspeed} km/h`;
    day1.innerHTML = `${data.days[1].feelslikemax} &#8451;`;
    day2.innerHTML = `${data.days[2].feelslikemax} &#8451;`;
    day3.innerHTML = `${data.days[3].feelslikemax} &#8451;`;
    day4.innerHTML = `${data.days[4].feelslikemax} &#8451;`;
    day5.innerHTML = `${data.days[5].feelslikemax} &#8451;`;
    day6.innerHTML = `${data.days[6].feelslikemax} &#8451;`;
    day7.innerHTML = `${data.days[7].feelslikemax} &#8451;`;
    
    date1.innerHTML = dayOne;
    date2.innerHTML = dayTwo;
    date3.innerHTML = dayThree;
    date4.innerHTML = dayFour;
    date5.innerHTML = dayFive;
    date6.innerHTML = daySix;
    date7.innerHTML = daySeven;
    
    copyright.innerHTML = `muWeather &copy; ${year}`;
  })
  .catch(error => {
    console.error('Error:', error);
  })
}

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const newValue = event.target.value;
    getWeather(newValue);
  
    input.value = "";
  }
});

//http://api.weatherapi.com/v1/current.json?key=660a922d49c44a8783480639240408&q=London&aqi=no

getWeather("Regents park, Johannesburg");