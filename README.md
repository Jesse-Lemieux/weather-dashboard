# Weather Dashboard

## Description

  The weather dashboard is easy to use and convenient place to get all weather information you need for any city! The dashboard provides Temp, wind speed, UV index ratings and even humidity levels! The weather dashboard is smart, to, it remebers your search history to make it even easier to get your weather.
  
  My motivation for this project was to use server-side API's (like openweather) to create a web page that fetches many different integers of data from multiple objects. I built this project to really test the limits of my understanding of API's in general as well as javascript to execute it all. Some problems I solved while creating this project were:
  
  - How to incorperate multiple fetches; The openweather API is formatted in a few different ways. Some have data on historial weather, some of current , and some of future weather. In this project i had to include 2 openweather API's to achieve the goals i had set for myself. Openweather original API to get [lat] and [lon] coordinates of cities to have them displayed and openweather "one call api" to get forecast data for the next few days.
  - How to use javascripts built in method of getDate() intuitively to add current date to weather display as well as functions to produce the next 5 days for my forecast.
  - I spent some time figuring out how to append search history buttons from local storage data and have addEventListener methods on them to direct the page to the city of the target clicked there.
  - After givig it some thought about how to append the weather displays, I ended up hardcoding them in HTML and targeting those elements in my javascript. I thought with the ammount of moving parts in this webpage, that would be the easiest to refactor in the future if i wanted to revisit this.
  

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

