const fetchButton = document.getElementById('fetch-button');
const apiKey = '745fa968965c597f7e9f61ff77469f22'; //Note: Entered api key as a string

function getApi() {
    const cityInputEl = document.getElementById('inputCity').value;
    const inputStateEl = document.getElementById('inputState').value;

    const requestLatLongApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInputEl},${inputStateEl},&appid=${apiKey}`;

    fetch(requestLatLongApiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log('Lattitude: ', data[0].lat);
            console.log('Longitude: ', data[0].lon);
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}`
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    console.log(data.weather[0].description);
                    console.log('Wind Speed: ', data.wind.speed);
                });
        });
}

fetchButton.addEventListener('click', getApi);
