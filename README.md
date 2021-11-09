# Eyes In The Sky 

<img src=" Assets/Images/logo.png" alt="Logo" width="250px" height ="200px" items-align="centre">

![Responsive-Website-Image]

 :globe_with_meridians: Live Website 

![Github Icon](/Assets/Images/github.png) [Github repository](https://github.com/bmcdonald2000/Eyes.In.The.Sky)



## What is Eyes In The Sky ?

Eyes In The Sky is a weather application that provides live and forecast weather data based on the users location or a location of their choice. Eyes In The Sky is useful for individuals who wish to plan their day/week in occordance to the weather. The ability to check both global and local weather is particularly useful to users planning to take a trip abroad.

<details>
<summary><strong>Table of contents:</strong></summary>
<br>

[User Experience (UX)](##User-Experience-(UX))

[Features](##Features)

[Technologies used](##Technologies-used)

[Testing](##Testings)

[Deployment](##Deployment)

[Known bugs](##Known-bugs)

[Credits](##Credits)
</details>

## User Experience (UX)

### User Stories
• As a user, I want to be able to acess weather data on my mobile so I can check the weather whislt on the go.
• As a user, I want to be able to check the hourly weather for the current days weather.
• As a user, I want to be able to input my own location into an input field in order to get weather data for any desired location.
• As a user, I want to be able to successfully submit my input in order to retrieve weather data for my input.
• As a user, I want some sort of feedback to let me know my search request was processed.
• As a user, I want to be able to use my device's location in order to get weather data without needing to type in my location.
• As a user, I want to be able to view the results of my successful search so that I can know the weather.
• As a user, I want to view the future weather for my searched location so that I know what the weather will be like for the rest of the week.

### Design

The main goal was to make an intuitive UX, so that the user is not confused when visiting the Website. To achieve this, I created a simple, succinct, one-page web application. Once the page has loaded the user sees an searchbar with place holder text, that tells them to enter a location. There is also a set of instructions below the text to insure the user understands the button functions.

The users desired results needed to be obtained with ease. This was achieved by using a 'Current Location' button, so they can get search results within one click, limiting the number of user actions to generate weather data.

The user needs to be able to easiy acess weather data from any device. To ensure this was possible I have enabled a scroll function so overflow is visble and kept the UX design simple so that it can be easily adjusted across all viewport sizes without the user loosing access to any functions or information.

The results of the search also needed to be clear , partciuarly for those using smaller viewports. The REST API that collected Weather Data had lots of data that could be displayed, so I eliminated any unncessary data so that the user only provided with  useful data. To help me determine which information was the most useful, I compared the the kind of data available on popular weather apps. Then tailored this to the needs of my target audience.

##### • Colour scheme
   ° I have gone for a complimentary colour palette, which I desgined using [canva](https://www.canva.com/colors/color-wheel/). The overall theme of the site is blue(#419AFF) and orange (#FFA641) as these are colours of the  sky and sun, thus commonly associated with the weather,  tying in with the purpose of the app. To make things easy for the user I used a monchrome design for the text. All hourly and forecasted weather data is displayed in white font (#000000) and a black background (#000000ec), an opaque black was used to create enough contrast between the animated background and the text for it to be visible, but not so much that it distracts the user from the animation or disrupts the fluidity of the design. Where a white font was not suitable I have used black (#ffffff).


##### • Typography
   ° In keeping with the simple style of the website, I have chosen to use a Thai and Latin family font 'Mali' as it has a carefree feel and is easy to read. I want the users to be carefree whislt using the site as the purpose of the site is to alow the users to retrived their desired data in a stress free way. 

##### • Imagery 
   ° The weather icons seen on the site are from the [Rest API](https://openweathermap.org/api). 
   ° The icons used for the buttons and the loader are from [font awesome](https://fontawesome.com/v6.0)
   ° The animated backgrounds used are from [pexels](https://www.pexels.com/).

##### • Wireframes
  °  Wireframes were created using [Figma] (https://www.figma.com/). To meet my UX objective of  creating a simple and intuitive User Interface (UI), I initially used a different colour schemes but further into the development I  realised greater contrast was required in order to engage the User. I also decided to include animated background and more craetive button styling, keeping inline with the simplistic theme but improving user engagement.  Here is the link to [my wireframes](https://www.figma.com/file/4BqP3k0Ta5XqvtWtveeFtR/Wire-Frames?node-id=0%3A1) for desktop and mobile. Below are screenshots of the desktop and mobile Wireframes. :point_down:

  **Desktop:** :desktop_computer:

<img src="Assets/Images/Desktop-wireframe.png" height="600px" width=600px alt="Desktop-Mockup">

  **Mobile:** :iphone:

<img src="Assets/Images/Mobile-wireframe.png" height="600px" width=300px alt="Mobile-Mockup">

## Features

#### Instructions container
When the user visits the web application, there are a few simple instructions that allow the user to understand how to use the site.

#### Current Location Weather
The user can click the location button, the browser will then ask the user permission to access their device's location. Once that is accepted, the weather results shown will be for that location - using latitude and longitude of the User's device. This button uses the Geolocation API.

#### Global button
Alternatively, the user can enter a location of their choice into the searchbar. Then click the global button, the weather API will return weather data for that location, provided the input is valid. Otherwise an error message will occur and the user will be prompted to try again.

#### Live Weather
When the user clicks either button, the app will display the current weather, location and any key information about the location. (Temperature, Weather,Humidity, Wind Speed, Pressure, Feels like, Highs and Lows). 

More information could have been added, but this could have potentially overwhelmed the user so instead I decided that this information was most important to a user seeking live weather information. 

#### Hourly Weather
To ensure the user recives the most accurate weather information for the day, hourly weather data for that location, is also displayed below the Live weather data.

#### Forecast Weather
The user will alos be provide with weather forcast for the next 6 days. Giving them a 7day weather app. To maintain the simplicity of the UX only the day, weather, weather icon and temperature is displayed for forecasted weather.

#### Footer
The footer contains buttons with links to Github, LinkedIn and Email where the can contact me. The links also open in a new tab for the users convenience.

## Technologies used
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
[Tinypng](https://tinypng.com/)
[Ezgift]https://ezgif.com/video-to-gif

## Testings
## Deployment
## Known bugs
## credits