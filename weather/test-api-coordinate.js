const axios = require('axios');
const weather_config = require('./weather_config');

const lon = '98.9048538';
const lat = '18.7967139';

async function getApi() {
    
    const apiUrl = await weather_config.weatherAPIUrl();
    const apiKey = await weather_config.weatherAPIKey();
    const url = `${apiUrl}?lon=${lon}&lat=${lat}&appid=${apiKey}&units=metric`;
    // console.log(url);

    axios
    .get(url)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

}

getApi();
