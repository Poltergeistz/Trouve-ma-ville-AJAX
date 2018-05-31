// apiWeather = https://www.api.openweathermap.org/data/2.5/weather?id=2972315&appid=a7d9a2f5fac5c4d3101c5e68f3fae892
// apiTime =
var temperatureContainer  = document.getElementById('temperature');
var apiWeather = "https://www.api.openweathermap.org/data/2.5/weather?id=2972315&appid=a7d9a2f5fac5c4d3101c5e68f3fae892";
var apiTime = "";
var apiAdress = "";
var apiLocation = "";

var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var request = new XMLHttpRequest();

    request.open('GET', apiWeather);
    request.onload = function(){
        var dataWeather = JSON.parse(request.responseText);
        console.log(dataWeather.main.temp);
        var tempC = "<p>"+ dataWeather.main.temp + "</p>";
};
    
    request.send();
});