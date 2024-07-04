var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var description = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var wrapper=document.querySelector('.wrapper')
var apik = "f7cd396d3047e27cb5cc4851ce869ed1"

function convertion(val) {
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var descriptionText = data['weather'][0]['description']
            var temperature = data['main']['temp']
            var windspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descriptionText}</span>`
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`

            wrapper.classList.add('visible');
        })
        .catch(err => alert('You entered Wrong City name'))
})
