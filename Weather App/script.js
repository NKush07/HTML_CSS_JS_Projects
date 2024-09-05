const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f2d718d471msh264d3b6cace3691p14c35djsnfedfdab11400',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        }
        )
        .catch(error => console.error(error));
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    getweather(city.value)
})
getweather("Delhi")



//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
