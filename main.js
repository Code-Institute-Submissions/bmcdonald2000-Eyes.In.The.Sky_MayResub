// selects the html elements for each variable
var button = document.querySelector('.btn-global');
var inputvalue = document.querySelector('.searchbar');
var city = document.querySelector('.city');
var temperature = document.querySelector('.Temp');
var weather = document.querySelector('.weather');
var humidty = document.querySelector('.Humidity');
var pressure = document.querySelector('.pressure');
var windspeed = document.querySelector('.wind');
var temperaturemax = document.querySelector('.highs');
var temperaturemin = document.querySelector('.Lows');
var feelslike = document.querySelector ('.Feels_like');
var btn = document.querySelector('.btn-local');

//  hides the following classes until data is returned
document.getElementById("hidden").style.display = "none";
document.getElementById("hide").style.display = "none";
document.getElementById("delay").style.display = "none";
 
//  if the global button is clicked the API will fetch the data
button.onclick = function() {

  //  validates searchbar so white space and numbers will return an error
   var i = inputvalue.value;
      if (i == "", "[0-9]") {
        alert("Location invalid, please try again");
        return false;
      } 
   $(".loader").show(0).delay(700).hide(0);
 
  // hide instructions display when button is clicked
  document.getElementById("instructions").style.display = "none";

   
 // gives url for api and allows the result fetched to be specific to the users input.
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&units=metric&appid=5701594af7e6297f4750926ed730f1fd')
 .then(response => response.json())
 .then(data => {

    let lat = data.coord.lat;
    let lon = data.coord.lon;
    getGlobalForecast(lat, lon);
   
    let cityValue = data.name;
    city.innerHTML = cityValue;
 });
// A different endpoint is used to return the data based on the lat and lon of the users input value
let getGlobalForecast = function(lat, lon) {
   fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=minutely&units=metric&appid=5701594af7e6297f4750926ed730f1fd')
    .then(response => response.json())
    .then(Data => {
   
   })};
       }
   