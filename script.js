// API OPENWEATHER
var apiWeather = "https://api.openweathermap.org/data/2.5/weather?id=2972315&appid=a7d9a2f5fac5c4d3101c5e68f3fae892&units=metric";
// API GOOGLE MAP
var apiLocation = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Toulouse,FR&destinations=Saint-Gaudens,FR&key=AIzaSyDCdXmgAuBOf53mKmSLDfyMm0ZWcc05H_Y";

// METEO
var btn = document.getElementById('btn');
var temperatureContainer = document.getElementById('temperature');

// LOCALISATION NON UTILISE
// var btnLoc = document.getElementById('btn-adress');
// var locContainer = document.getElementById('adresse');

// ITINERAIRE
var btnDistance = document.getElementById('btn-itin');
var distContainer = document.getElementById('itineraire');

// EVENT CLICK METEO & LOCALISATION
btn.addEventListener('click', function () {
    var request = new XMLHttpRequest();

    request.open('GET', apiWeather);
    request.onload = function () {
        
        if (request.status >= 200 && request.status < 400) { // >= 200 & < 400 = OK
            var dataWeather = JSON.parse(request.responseText);
            console.log(dataWeather);
            console.log(dataWeather.main.temp);

            var tempC = dataWeather.main.temp + "°C" + "<br>";
            var description = dataWeather.weather[0].description;
            var lon = dataWeather.coord.lon;
            console.log(lon);
            var lat = dataWeather.coord.lat;
            console.log(lat);

            
            var format = "<br>" + "Temperature Toulouse : " + tempC + "<br>" + "Description : " + description + "<br>" + "<h1>" + "Coordonnées" + "</h1>" + "Longitude : " + lon + "<br>" + "Latitude : " + lat;

            temperatureContainer.innerHTML = format;
        } else {
            console.log("connected but error");
        }
        
    };
    request.send();
});



// EVENT CLICK DISTANCE
btnDistance.addEventListener('click', function(){
    var request = new XMLHttpRequest();

    request.open('GET', apiLocation);
    request.onload = function () {
        var dataLocation = JSON.parse(request.responseText);
        console.log(dataLocation);

        var distance = dataLocation.rows[0].elements[0].distance.text;
        var duration = dataLocation.rows[0].elements.duration.text;
        console.log(distance);
        console.log(duration);
        var format = "<br>" + "Distance : " + distance + "KM" + "<br>" + "Durée : " + duration;

        distContainer.innerHTML = format;

    };
    request.send();
});

