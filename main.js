// Selects HTML elements for each variable
var button = document.querySelector('.btn-search');
var inputvalue = document.querySelector('.searchbar');
var infoTxt = document.querySelector(".info-txt");
const weather = document.querySelector('.weather-info');
var btn = document.querySelector('.btn-local');
const wrapper = document.querySelector(".wrapper");
var Back = wrapper.querySelector("header i");


// user can use enter to search
inputvalue.addEventListener("keyup", e =>{
  if(e.key == "Enter" && inputvalue.value != "" ){
  requestAPI(inputvalue.value);}
});

// on click the search button will call the search fucntion
button.addEventListener("click", search);

 
//  if the search button is clicked and input not empty the API will fetch the data
function search() {
   if(inputvalue.value != "")
   requestAPI(inputvalue.value);
}
 
// on click the Local button will call the local fucntion
btn.addEventListener("click", local);
 
//  Local Button Function,, on click the geolocation API will ask permission to use the users
function local() {
 
  //  The user will be prompted to giver permision to use their location
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(onSuccess, onError);
 
  }else{
  //  if geolocation is not supported the user will recieve an alert.
      alert("Geolocation api is not supported by your browser. ");
  }
}
 
function requestAPI(city){
// gives url for api and allows the result fetched to be specific to the users input. (free API key, okay to publically expose)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5701594af7e6297f4750926ed730f1fd`)
.then(response => response.json())
.then(data => {
 
  if (data.cod == "404"){
     infoTxt.innerText = `${inputvalue.value} isn't a valid city name, please try again`;
  }else{
 
  // The user will recieve feedback so that they know there request is being loaded
  infoTxt.innerText = "Fetching your weather details...";
 
  let lat = data.coord.lat;
  let lon = data.coord.lon;
  getForecast(lat, lon);
   let cityValue = data.name;
  let country = data.sys.country;
  weather.querySelector(".city span").innerText = `${cityValue},${country}`;
  wrapper.classList.add("active");
  infoTxt.innerText = "";
  }});
}
// A different endpoint is used to return the data based on the lat and lon of the users input value
 let getForecast = function(lat, lon) {
 
 fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=minutely&units=metric&appid=5701594af7e6297f4750926ed730f1fd')
.then(response => response.json())
.then(Data => {
 
//  provides variable names and the current data that should be returned.
var temperatureValue = Math.round(Data.current.temp);
var weatherValue = Data.current.weather[0].main;
var humidityValue = Data.current.humidity;
var feelslikeValue = Math.round(Data.current.feels_like);
// the returned data will then be displayed in the corrisponding html class.
document.getElementById("Temperature").innerHTML =temperatureValue + '°c';
document.getElementById("weather").innerHTML =weatherValue;
document.getElementById("humidity").innerHTML = 'Humidity:' + humidityValue + '%';
document.getElementById("feels_like").innerHTML = 'Feels like:' + feelslikeValue + '°c';
            
  // Tommorow's data
  let epochTomorrow = Data.daily['1'].dt;
  let FullDateTomorrow= new Date(epochTomorrow * 1000);
  let TomorrowNumb = FullDateTomorrow.getDay();
  let Tomorrow= getDayofWeek(TomorrowNumb);
  let TempTomo = Math.round(Data.daily['1'].temp.day);
  let WeatherTomo = Data.daily['1'].weather[0].main
 // Day After Tommorrow's data
 let epochDayAfterTommorrow = Data.daily['2'].dt;
 let FullDate3 = new Date(epochDayAfterTommorrow * 1000);
 let DayAfterTommorrowNumb = FullDate3.getDay();
 let DayAfterTommorrow= getDayofWeek(DayAfterTommorrowNumb);
 let TempDayAfterTomo = Math.round(Data.daily['2'].temp.day);
 let WeatherDayAfterTomo = Data.daily['2'].weather[0].main;
 // Fourth Days data
 let epochFourthDay = Data.daily['3'].dt;
 let FullDate4 = new Date(epochFourthDay * 1000);
 let FourthDayNumb = FullDate4.getDay();
 let FourthDay= getDayofWeek(FourthDayNumb);
 let TempDFour = Math.round(Data.daily['3'].temp.day);
 let WeatherDFour = Data.daily['3'].weather[0].main;
 //Fifth Days data
 let epochFifthDay = Data.daily['4'].dt;
 let FullDate5 = new Date(epochFifthDay * 1000);
 let FifthDayNumb = FullDate5.getDay();
 let FifthDay= getDayofWeek(FifthDayNumb);
 let TempDFive = Math.round(Data.daily['4'].temp.day);
 let WeatherDFive = Data.daily['4'].weather[0].main;
 //Sixth Days data
 let epochSixthDay = Data.daily['5'].dt;
 let FullDate6 = new Date(epochSixthDay * 1000);
 let SixthDayNumb = FullDate6.getDay();
 let SixthDay= getDayofWeek(SixthDayNumb);
 let TempDSix = Math.round(Data.daily['5'].temp.day);
 let WeatherDSix = Data.daily['5'].weather[0].main;
 //Seventh Days data
 let epochSeventhDay = Data.daily['6'].dt;
 let FullDate7 = new Date(epochSeventhDay * 1000);
 let SeventhDayNumb = FullDate7.getDay();
 let SeventhDay= getDayofWeek(SeventhDayNumb);      
 let TempDSeven = Math.round(Data.daily['6'].temp.day);
 let WeatherDSeven = Data.daily['6'].weather[0].main;
 
 // DayAfterTommorrows data will be returned in the following elements
 document.getElementById("tomorrows").innerHTML = Tomorrow;
 document.getElementById("temptomo").innerHTML = TempTomo + "°c";
 document.getElementById("Weathertomo").innerHTML = WeatherTomo;
  // DayAfterTommorrows data will be returned in the following elements
 document.getElementById("day3").innerHTML = DayAfterTommorrow;
 document.getElementById("day3temp").innerHTML = TempDayAfterTomo + "°c";
 document.getElementById("Weatherday3").innerHTML = WeatherDayAfterTomo;
 // Day 4's data will be returned in the following elements
 document.getElementById("day4").innerHTML = FourthDay;
 document.getElementById("day4temp").innerHTML = TempDFour + "°c";
 document.getElementById("Weatherday4").innerHTML = WeatherDFour;
 // Day 5's data will be returned in the following elements
 document.getElementById("day5").innerHTML = FifthDay;
 document.getElementById("day5temp").innerHTML = TempDFive + "°c";
 document.getElementById("Weatherday5").innerHTML = WeatherDFive;
 // Day 6's data will be returned in the following elements
 document.getElementById("day6").innerHTML = SixthDay;
 document.getElementById("day6temp").innerHTML = TempDSix + "°c";
 document.getElementById("Weatherday6").innerHTML = WeatherDSix;
 // Day 7's data will be returned in the following elements
 document.getElementById("day7").innerHTML = SeventhDay;
 document.getElementById("day7temp").innerHTML = TempDSeven + "°c";
 document.getElementById("Weatherday7").innerHTML = WeatherDSeven;
 //Icon url and format
 let iconUrl = "http://openweathermap.org/img/wn/";
 let format = ".png";
 
 //Today's icon data
 let CurrentIcon = Data.current.weather[0].icon;
 let getCurrentIcon = iconUrl + CurrentIcon + format;
 
 //Tomorrow's icons data
 let tomorrowsIcon = Data.daily['1'].weather[0].icon;
 let getTomorowsIcon = iconUrl + tomorrowsIcon + format;
 //DayAfterTommorrow
 let DayAfterTommorrowIcon = Data.daily['2'].weather[0].icon;
 let getDayAfterTommorrowIcon = iconUrl + DayAfterTommorrowIcon + format;
 //Day 4's icon data
 let Icon4 = Data.daily['3'].weather[0].icon;
 let getIcon4 = iconUrl + Icon4 + format;
 //Day 5's icon data
 let Icon5 = Data.daily['4'].weather[0].icon;
 let getIcon5 = iconUrl + Icon5 + format;
 //Day 6's icon data
 let Icon6 = Data.daily['5'].weather[0].icon;
 let getIcon6 = iconUrl + Icon6 + format;
 //Day 7's icon data
 let Icon7 = Data.daily['6'].weather[0].icon;
 let getIcon7 = iconUrl + Icon7 + format;
 //Current icon
 document.getElementById("current-icon").src = getCurrentIcon;
 //Tomorrow's icons
 document.getElementById("Tomorrows-icon").src = getTomorowsIcon;
 //DayAfterTommorrow's icon
 document.getElementById("DayAfterTomorrows-icon").src = getDayAfterTommorrowIcon;
 //Day 4's icon
 document.getElementById("icon4").src = getIcon4;
 //Day 5's icon
 document.getElementById("icon5").src = getIcon5;
 //Day 6's icon
 document.getElementById("icon6").src = getIcon6;
 //Day 7's icon
 document.getElementById("icon7").src = getIcon7;
 
});
  // returns user back to the input page, clears the input
  Back.addEventListener("click", ()=>{
  wrapper.classList.remove("active");
  inputvalue.value = "";
 
});
 
// converts the day of the week from a number to a day
let getDayofWeek = function(DayNumb) {
 var weekday = new Array(7);
 weekday[0] = 'Sun';
 weekday[1] = 'Mon';
 weekday[2] = 'Tue';
 weekday[3] = 'Wed';
 weekday[4] = 'Thu';
 weekday[5] = 'Fri';
 weekday[6] = 'Sat';
return (weekday[DayNumb]);
};};
 
// If successful, the co-ordinates from the users location are parsed through the api endpoint
function onSuccess(position){
  const {latitude, longitude} = position.coords;
  fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=5701594af7e6297f4750926ed730f1fd`)
  .then(response => response.json())
  .then(data=> {
 
  const city = data.name;
  const country = data.sys.country;
  weather.querySelector(".city span").innerHTML= `${city}, ${country}`;
  fetchData(latitude, longitude);
  });
}
// If an error occurs an error message is returned.
function onError(error){
   infoTxt.innerText = error.message;
}
 
