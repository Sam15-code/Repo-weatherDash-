var searchbutton=document.getElementById("searchbutton")
searchbutton,addEventListener("click",function(){
     var city=document.getElementById("cityname").value

     console.log("city",city)
     getCurrentWeatherForcast(city)
     weatherchannel(city)
})


function getCurrentWeatherForcast(city){
     
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
    
    console.log(queryURL)
    fetch(queryURL)
    .then(response=> {
        return response.json()
    }).then(data=> {
        console.log(data)

    })
}