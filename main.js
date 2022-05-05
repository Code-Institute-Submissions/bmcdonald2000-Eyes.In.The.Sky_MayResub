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
