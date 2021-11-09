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

//  provides variable names and the current data that should be returned.
 var temperatureValue = Math.round(Data.current.temp);
 var weatherValue = Data.current.weather[0].main;
 var humidityValue = Data.current.humidity;
 var pressureValue = Data.current.pressure;
 var windspeedValue = Data.current.wind_speed;
 var temperaturemaxValue = Math.round(Data.daily['0'].temp.max);
 var temperatureminValue = Math.round(Data.daily['0'].temp.min);
 var feelslikeValue = Math.round(Data.current.feels_like);
 
 // the returned data will then be displayed in the corrisponding html class.
 temperature.innerHTML =temperatureValue + "°c";
 weather.innerHTML =weatherValue;
 humidty.innerHTML ="Humidity:"+ humidityValue + "°c";
 pressure.innerHTML ="Pressure:"+ pressureValue + "hPa";
 windspeed.innerHTML ="Wind sped:" + windspeedValue + "m/s";
 temperaturemax.innerHTML ="H:" + temperaturemaxValue + "°c";
 temperaturemin.innerHTML ="L:" +temperatureminValue+ "°c";
 feelslike.innerHTML ="Feels like:"+ feelslikeValue + "°c";
              
 // Hourly time in epoch time
  let EpochTime1 = Data.hourly['1'].dt;
  let EpochTime2 = Data.hourly['2'].dt;
  let EpochTime3 = Data.hourly['3'].dt;
  let EpochTime4 = Data.hourly['4'].dt;
  let EpochTime5 = Data.hourly['5'].dt;
            
 // hourly time and date
  let DateTime1 = new Date(EpochTime1 * 1000);
  let DateTime2 = new Date(EpochTime2 * 1000);
  let DateTime3 = new Date(EpochTime3 * 1000);
  let DateTime4 = new Date(EpochTime4 * 1000);
  let DateTime5 = new Date(EpochTime5 * 1000);
 
 // hourly time
  let Time1 = DateTime1.getHours();
  let Time2 = DateTime2.getHours();
  let Time3 = DateTime3.getHours();
  let Time4 = DateTime4.getHours();
  let Time5 = DateTime5.getHours();
 
 // Today's times data will be returned in the following elements
  document.getElementById("time1").innerHTML = Time1 + ":00";
  document.getElementById("time2").innerHTML = Time2 + ":00";
  document.getElementById("time3").innerHTML = Time3 + ":00";
  document.getElementById("time4").innerHTML = Time4 + ":00";
  document.getElementById("time5").innerHTML = Time5 + ":00";
 
  // Today's hourly data
  let NOW = Math.round(Data.hourly['0'].temp);
  let hour1 = Math.round(Data.hourly['1'].temp);
  let hour2 = Math.round(Data.hourly['2'].temp);
  let hour3 = Math.round(Data.hourly['3'].temp);
  let hour4 = Math.round(Data.hourly['4'].temp);
  let hour5 = Math.round(Data.hourly['5'].temp);
  
  // Today's hourly data will be returned in the following elements adding the necessary symbols
  document.getElementById("now").innerHTML = "Now" + NOW + "°c"; 
  document.getElementById("hour1").innerHTML = hour1 + "°c";
  document.getElementById("hour2").innerHTML = hour2 + "°c"; 
  document.getElementById("hour3").innerHTML = hour3 + "°c"; 
  document.getElementById("hour4").innerHTML = hour4 + "°c"; 
  document.getElementById("hour5").innerHTML = hour5 + "°c";   
 
  //Icon url and format
  let iconUrl = "http://openweathermap.org/img/wn/";
  let format = ".png";
  
  //Now icons data
  let NowIcon = Data.hourly['0'].weather[0].icon;
  let getNowIcon = iconUrl + NowIcon + format;
 
  //hr1 icons data
  let hr1Icon = Data.hourly['1'].weather[0].icon;
  let gethr1Icon = iconUrl + hr1Icon + format;
 
  //hr2 icons data
  let hr2Icon = Data.hourly['2'].weather[0].icon;
  let gethr2Icon = iconUrl + hr2Icon + format;
 
  //hr3 icons data
  let hr3Icon = Data.hourly['3'].weather[0].icon;
  let gethr3Icon = iconUrl + hr3Icon + format;
 
  //hr4 icons data
  let hr4Icon = Data.hourly['4'].weather[0].icon;
  let gethr4Icon = iconUrl + hr4Icon + format;
 
  //hr5 icons data
  let hr5Icon = Data.hourly['5'].weather[0].icon;
  let gethr5Icon = iconUrl + hr5Icon + format;  
   
});
}; 
};
