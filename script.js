var temperatureContainer = document.getElementById('temperature');
var apiWeather = "https://api.openweathermap.org/data/2.5/weather?id=2972315&appid=a7d9a2f5fac5c4d3101c5e68f3fae892&units=metric";
var apiTime = "https://";
var apiAdress = "https://";
var apiLocation = "https://";

var btn = document.getElementById('btn');

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
            temperatureContainer.innerHTML = "Temperature Toulouse : " + tempC + "<br>" + "Description : " + description;

            /* J'ai eu un problème, quand je clique sur le bouton j'ai une requete et une autre en diférée
            j'ai contourné le problème avec un innerHTML mais j'aimerais savoir pourquoi j'ai ce soucis.
            */
            // temperatureContainer.insertAdjacentHTML('beforeend', "Temperature Toulouse : " + tempC);
        } else {
            console.log("connected but error");
        }
        
    };
    request.send();
});

// function addHtml(temp) {
//     console.log("test function");
//     tempContainer.insertAdjacentHTML('beforeend', "temperature Toulouse :" +temp.main.temp + "°C");
// }

