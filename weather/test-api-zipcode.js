const axios = require('axios');
const weather_config = require('./weather_config');

const zipCode = '10210';
const countryCode = 'TH';

async function getApi() {
    
    const apiUrl = await weather_config.weatherAPIUrl();
    const apiKey = await weather_config.weatherAPIKey();
    const url = `${apiUrl}?zip=${zipCode},${countryCode}&appid=${apiKey}&units=metric`;
    // console.log(url);

    axios
    .get(url)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

}

getApi();
