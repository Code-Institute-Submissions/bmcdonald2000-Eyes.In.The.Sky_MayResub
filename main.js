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

};
