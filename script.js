var searchbutton=document.getElementById("searchbutton")
searchbutton.addEventListener("click",function(){
     var city=document.getElementById("cityname").value

     console.log("city",city)
     getCurrentWeatherForcast(city)
  //  // weatherChannel(city)
})

var API = "8095293d15a37b773341543e6e448f85"

function getCurrentWeatherForcast(city){
     
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`

    console.log(queryURL)
    fetch(queryURL)
    .then(response=> {
        return response.json()
    }).then(data=> {
        console.log(data)
        var cardsCode = `<div class="card" style="width: 18rem;">
       
        <div class="card-body">
          <h5 class="card-title">${city} <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="card-img-top" alt="icon"></h5>
          <p class="card-text">${data.weather[0].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Temp: ${data.main.temp}</li>
          <li class="list-group-item">humidity: ${data.main.humidity}</li>
          <li class="list-group-item">windspeed: ${data.wind.speed}</li>
        </ul>
       
      </div>`
      document.getElementById("currentDay").innerHTML = cardsCode

    })
}