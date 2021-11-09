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
 
  //Today's hourly icons
  document.getElementById("Nowicon").src = getNowIcon;
  document.getElementById("hr1icon").src = gethr1Icon;
  document.getElementById("hr2icon").src = gethr2Icon;
  document.getElementById("hr3icon").src = gethr3Icon;
  document.getElementById("hr4icon").src = gethr4Icon;
  document.getElementById("hr5icon").src = gethr5Icon;
 
  // Tommorow's data
  let epochTommorrow = Data.daily['1'].dt;
  let FullDateTommorrow= new Date(epochTommorrow * 1000);
  let TommorrowNumb = FullDateTommorrow.getDay();
  let Tommorrow= getDayofWeek(TommorrowNumb);
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
 
  // Tomorrows data will be returned in the following elements
  document.getElementById("tomorrows").innerHTML = Tommorrow;
  document.getElementById("temptomo").innerHTML = TempTomo + "°c";
  document.getElementById("Weathertomo").innerHTML = WeatherTomo;
 
  // DayAfterTommorrows data will be returned in the following elements
  document.getElementById("DayAfterTommorrow").innerHTML = DayAfterTommorrow;
  document.getElementById("DayAfterTommorrowtemp").innerHTML = TempDayAfterTomo + "°c";
  document.getElementById("WeatherDayAfterTomo").innerHTML = WeatherDayAfterTomo;
 
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
 
  // Background animations
   switch (weatherValue) {

  // when snowing
     case "Snow":
   document.getElementById("bg-wrapper").style.backgroundImage = "url('/Media/Images/Snowing.gif')";
   break;
  // when cloudy
      case "Clouds":
   document.getElementById("bg-wrapper").style.backgroundImage = "url('/Media/Images/Clouds.gif')";
   break;
  // when foggy
      case "Fog":
   document.getElementById("bg-wrapper").style.backgroundImage = "url('/Media/Images/Fog.gif')";
   break;
  // when raining
      case "Rain":
   document.getElementById("bg-wrapper").style.backgroundImage = "url('/Media/Images/Rain.gif')";
   break;
  // when clear
      case "Clear":
   document.getElementById("bg-wrapperg").style.backgroundImage = "url('/Media/Images/Clear.gif')";
   break;
  // when Thundery
      case "Thunderstorm":
   document.getElementById("bg-wrapper").style.backgroundImage = "url('/Media/Images/Thunderstorm.gif')";
   break;
  // the defult background that will be used 
      default:
   document.getElementById("bg-wrapper").style.backgroundImage = "url('/Media/Images/Clear.gif')";
   break;
   };
 
});
}; 

// converts the day of the week from a number to a day
let getDayofWeek = function(DayNumb) {
  var weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';
 return (weekday[DayNumb]);
};

 // displays hidden class and hides the loader
 $(".loader").hide(0);
 $(".hourly-weather").hide(0).delay(700).show(0);
 $(".weather-display").hide(0).delay(700).show(0);
 $(".delay").hide(0).delay(700).show(0);
};

//  Local Button Function,, on click the geolocation API will ask permission to use the users
btn.onclick = function() {

   //  if there is an error with the geolocation, the user will recieve an alert
   if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser or is not enabled.");
   } else {
  let userPosition = function(pos){
          let lat = pos.coords.latitude;
          let lon = pos.coords.longitude;
          getForecast(lat, lon);
  };
  
  //  loader appears until all the data is returned
  $(".loader").show(0).delay(4000).hide(0);

  // hide instructions display when button is clicked
  document.getElementById("instructions").style.display = "none";
 
 // a different end point is used to return the data based on the users input.
 let getForecast = function(lat, lon) {
 
   // the lat and lon from the previous endpoint are inserted into the URL
         let url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=minutely&units=metric&appid=5701594af7e6297f4750926ed730f1fd';
         getWeather(url);
 };
   
   // asynchronous function to ensure the the next line of code is not executed until the function has finished processing
         async function getWeather(url) {
            
            // fetch results asigned to weather object
             let weatherObject= await fetch(url);
            
             // weather object is then converted into text
             let weatherText = await weatherObject.text();
             parseWeather(weatherText);
         };
         
         // parsed weather data
         let parseWeather = function(weatherText) {
             let weatherJSON = JSON.parse(weatherText);

             // stores the daily data in a seperate variable
             let dailyForecast = weatherJSON.daily;
            
             // calculation to find today
              for (let d = 0; d < dailyForecast.length; d ++) {
                  let today = new Date().getDay() + d;
              if (today > 6) {
                  today = today - 7 ;
          };
 
             //  provides variable names and the data that should be returned.
             let cityValue = weatherJSON.timezone;
             let temperatureValue = Math.round(weatherJSON.current.temp);
             let weatherValue = weatherJSON.current.weather[0].main;
             let humidityValue = weatherJSON.current.humidity;
             let pressureValue = weatherJSON.current.pressure;
             let windspeedValue = weatherJSON.current.wind_speed;
             let temperaturemaxValue = Math.round(dailyForecast [0].temp.max);
             let temperatureminValue = Math.round(dailyForecast [0].temp.min);
             let feelslikeValue = Math.round(weatherJSON.current.feels_like);
 
             // the returned data will then be displayed in the corrisponding html class.
             city.innerHTML = cityValue;
             temperature.innerHTML =temperatureValue + "°c";
             weather.innerHTML =weatherValue;
             humidty.innerHTML ="Humidity:"+ humidityValue + "°c";
             pressure.innerHTML ="Pressure:"+ pressureValue + "hPa";
             windspeed.innerHTML ="Wind sped:" + windspeedValue + "m/s";
             temperaturemax.innerHTML ="H:" + temperaturemaxValue + "°c";
             temperaturemin.innerHTML ="L:" +temperatureminValue+ "°c";
             feelslike.innerHTML ="Feels like:"+ feelslikeValue + "°c";
        
             // Today's hourly data
             let NOW = Math.round(weatherJSON.hourly['0'].temp);
             let hour1 = Math.round(weatherJSON.hourly['1'].temp);
             let hour2 = Math.round(weatherJSON.hourly['2'].temp);
             let hour3 = Math.round(weatherJSON.hourly['3'].temp);
             let hour4 = Math.round(weatherJSON.hourly['4'].temp);
             let hour5 = Math.round(weatherJSON.hourly['5'].temp);
            
             // Tommorow's data
             let epochTommorrow = weatherJSON.daily['1'].dt;
             let FullDateTommorrow= new Date(epochTommorrow * 1000);
             let TommorrowNumb = FullDateTommorrow.getDay();
             let Tommorrow= getDayofWeek(TommorrowNumb);
             let TempTomo = Math.round(weatherJSON.daily['1'].temp.day);
             let WeatherTomo = weatherJSON.daily['1'].weather[0].main;
            
             // Day After Tommorrow's data
             let epochDayAfterTommorrow = weatherJSON.daily['2'].dt;
             let FullDate3 = new Date(epochDayAfterTommorrow * 1000);
             let DayAfterTommorrowNumb = FullDate3.getDay();
             let DayAfterTommorrow= getDayofWeek(DayAfterTommorrowNumb);
             let TempDayAfterTomo = Math.round(weatherJSON.daily['2'].temp.day);
             let WeatherDayAfterTomo = weatherJSON.daily['2'].weather[0].main;
            
             // Fourth Days data
             let epochFourthDay = weatherJSON.daily['3'].dt;
             let FullDate4 = new Date(epochFourthDay * 1000);
             let FourthDayNumb = FullDate4.getDay();
             let FourthDay= getDayofWeek(FourthDayNumb);
             let TempDFour = Math.round(weatherJSON.daily['3'].temp.day);
             let WeatherDFour = weatherJSON.daily['3'].weather[0].main;
            
             //Fifth Days data
             let epochFifthDay = weatherJSON.daily['4'].dt;
             let FullDate5 = new Date(epochFifthDay * 1000);
             let FifthDayNumb = FullDate5.getDay();
             let FifthDay= getDayofWeek(FifthDayNumb);
             let TempDFive = Math.round(weatherJSON.daily['4'].temp.day);
             let WeatherDFive = weatherJSON.daily['4'].weather[0].main;
            
             //Sixth Days data
             let epochSixthDay = weatherJSON.daily['5'].dt;
             let FullDate6 = new Date(epochSixthDay * 1000);
             let SixthDayNumb = FullDate6.getDay();
             let SixthDay= getDayofWeek(SixthDayNumb);
             let TempDSix = Math.round(weatherJSON.daily['5'].temp.day);
             let WeatherDSix = weatherJSON.daily['5'].weather[0].main;
            
             //Seventh Days data
             let epochSeventhDay = weatherJSON.daily['6'].dt;
             let FullDate7 = new Date(epochSeventhDay * 1000);
             let SeventhDayNumb = FullDate7.getDay();
             let SeventhDay= getDayofWeek(SeventhDayNumb);       
             let TempDSeven = Math.round(weatherJSON.daily['6'].temp.day);
             let WeatherDSeven = weatherJSON.daily['6'].weather[0].main;
 
             // Hourly time in epoch time
             let EpochTime1 = weatherJSON.hourly['1'].dt;
             let EpochTime2 = weatherJSON.hourly['2'].dt;
             let EpochTime3 = weatherJSON.hourly['3'].dt;
             let EpochTime4 = weatherJSON.hourly['4'].dt;
             let EpochTime5 = weatherJSON.hourly['5'].dt;
            
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
 
           //Icon url and format
              let iconUrl = "http://openweathermap.org/img/wn/";
              let format = ".png";
           
           //Now icons data
              let NowIcon = weatherJSON.hourly['0'].weather[0].icon;
              let getNowIcon = iconUrl + NowIcon + format;
          
           //hr1 icons data
              let hr1Icon = weatherJSON.hourly['1'].weather[0].icon;
              let gethr1Icon = iconUrl + hr1Icon + format;
          
           //hr2 icons data
              let hr2Icon = weatherJSON.hourly['2'].weather[0].icon;
              let gethr2Icon = iconUrl + hr2Icon + format;
          
           //hr3 icons data
              let hr3Icon = weatherJSON.hourly['3'].weather[0].icon;
              let gethr3Icon = iconUrl + hr3Icon + format;
          
           //hr4 icons data
              let hr4Icon = weatherJSON.hourly['4'].weather[0].icon;
              let gethr4Icon = iconUrl + hr4Icon + format;
          
           //hr5 icons data
              let hr5Icon = weatherJSON.hourly['5'].weather[0].icon;
              let gethr5Icon = iconUrl + hr5Icon + format;
 
           //Tomorrow's icons data
              let tomorrowsIcon = weatherJSON.daily['1'].weather[0].icon;
              let getTomorowsIcon = iconUrl + tomorrowsIcon + format;
          
           //DayAfterTommorrow
              let DayAfterTommorrowIcon = weatherJSON.daily['2'].weather[0].icon;
              let getDayAfterTommorrowIcon = iconUrl + DayAfterTommorrowIcon + format;
          
           //Day 4's icon data
              let Icon4 = weatherJSON.daily['3'].weather[0].icon;
              let getIcon4 = iconUrl + Icon4 + format;
          
           //Day 5's icon data
              let Icon5 = weatherJSON.daily['4'].weather[0].icon;
              let getIcon5 = iconUrl + Icon5 + format;
          
           //Day 6's icon data
           let Icon6 = weatherJSON.daily['5'].weather[0].icon;
           let getIcon6 = iconUrl + Icon6 + format;
 
           //Day 7's icon data
           let Icon7 = weatherJSON.daily['6'].weather[0].icon;
           let getIcon7 = iconUrl + Icon7 + format;
 
             displayWeatherDay(NOW,hour1,hour2,hour3,hour4,hour5,Time1,Time2,Time3,Time4,Time5,Tommorrow,DayAfterTommorrow,FourthDay,FifthDay,SixthDay,SeventhDay,TempTomo,WeatherTomo,TempDayAfterTomo,WeatherDayAfterTomo,TempDFour,WeatherDFour,TempDFive,WeatherDFive,TempDSix,WeatherDSix,TempDSeven,WeatherDSeven,getTomorowsIcon,getDayAfterTommorrowIcon,getIcon4,getIcon5,getIcon6,getIcon7,getNowIcon,gethr1Icon,gethr2Icon,gethr3Icon,gethr4Icon,gethr5Icon);
 
         // Background animations change based on the weather
         switch (weatherValue) {
         // when snowing
         case "Snow":
         document.getElementById("bg-wrapper").style.backgroundImage = "url('/Media/Images/Snowing.gif')";
         break;
         // when cloudy
         case "Clouds":
         document.getElementById("bg-wrapper").style.backgroundImage = "url('/Assets/Images/Clouds.gif')";
         break;
         // when foggy
         case "Fog":
         document.getElementById("bg-wrapper").style.backgroundImage = "url('/Assets/Images/Fog.gif')";
         break;
         // when raining
         case "Rain":
         document.getElementById("bg-wrapper").style.backgroundImage = "url('/Assets/Images/Rain.gif')";
         break;
         // when clear
         case "Clear":
         document.getElementById("bg-wrapperg").style.backgroundImage = "url('/Assets/Images/Clear.gif')";
         break;
         // when Thundery
         case "Thunderstorm":
         document.getElementById("bg-wrapper").style.backgroundImage = "url('/Assets/Images/Thunderstorm.gif')";
         break;
         // the defult background that will be used 
         default:
         document.getElementById("bg-wrapper").style.backgroundImage = "url('/Assets/Images/Clear.gif')";
         break;
        };
          };
          };
 
          let displayWeatherDay = function (NOW,hour1,hour2,hour3,hour4,hour5,Time1,Time2,Time3,Time4,Time5,Tommorrow,DayAfterTommorrow,FourthDay,FifthDay,SixthDay,SeventhDay,TempTomo,WeatherTomo,TempDayAfterTomo,WeatherDayAfterTomo,TempDFour,WeatherDFour,TempDFive,WeatherDFive,TempDSix,WeatherDSix,TempDSeven,WeatherDSeven,getTodaysIcon,getTomorowsIcon,getDayAfterTommorrowIcon,getIcon4,getIcon5,getIcon6,getIcon7,getNowIcon,gethr1Icon,gethr2Icon,gethr3Icon,gethr4Icon,gethr5Icon) {
           
            // Today's hourly data will be returned in the following elements adding the necessary symbols
              document.getElementById("now").innerHTML = NOW + "°c"; 
              document.getElementById("hour1").innerHTML = hour1 + "°c";
              document.getElementById("hour2").innerHTML = hour2 + "°c"; 
              document.getElementById("hour3").innerHTML = hour3 + "°c"; 
              document.getElementById("hour4").innerHTML = hour4 + "°c"; 
              document.getElementById("hour5").innerHTML = hour5 + "°c";         
 
           // Today's times data will be returned in the following elements
              document.getElementById("timenow").innerHTML = "Now";
              document.getElementById("time1").innerHTML = Time1 + ":00";
              document.getElementById("time2").innerHTML = Time2 + ":00";
              document.getElementById("time3").innerHTML = Time3 + ":00";
              document.getElementById("time4").innerHTML = Time4 + ":00";
              document.getElementById("time5").innerHTML = Time5 + ":00";
 
           // Tomorrows data will be returned in the following elements
              document.getElementById("tomorrows").innerHTML = Tommorrow;
              document.getElementById("temptomo").innerHTML = TempTomo + "°c";
              document.getElementById("Weathertomo").innerHTML = WeatherTomo;
          
           // DayAfterTommorrows data will be returned in the following elements
              document.getElementById("DayAfterTommorrow").innerHTML = DayAfterTommorrow;
              document.getElementById("DayAfterTommorrowtemp").innerHTML = TempDayAfterTomo + "°c";
              document.getElementById("WeatherDayAfterTomo").innerHTML = WeatherDayAfterTomo;
          
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
          
       // The icon data for each day will be returned in the following elements
          
           //Today's hourly icons
           document.getElementById("Nowicon").src = getNowIcon;
           document.getElementById("hr1icon").src = gethr1Icon;
           document.getElementById("hr2icon").src = gethr2Icon;
           document.getElementById("hr3icon").src = gethr3Icon;
           document.getElementById("hr4icon").src = gethr4Icon;
           document.getElementById("hr5icon").src = gethr5Icon;
 
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
        };
           // converts the day of the week from a number to a day
           let getDayofWeek = function(DayNumb) {
              var weekday = new Array(7);
              weekday[0] = 'Sunday';
              weekday[1] = 'Monday';
              weekday[2] = 'Tuesday';
              weekday[3] = 'Wednesday';
              weekday[4] = 'Thursday';
              weekday[5] = 'Friday';
              weekday[6] = 'Saturday';
             return (weekday[DayNumb]);
            };
 
          navigator.geolocation.getCurrentPosition(userPosition); 
       };
         // displays hidden class on button click (delayed so that it shows once infor is loaded)
         $(".hourly-weather").hide(0).delay(4000).show(0);
         $(".weather-display").hide(0).delay(4000).show(0);
         $(".delay").hide(0).delay(4000).show(0);
       };
