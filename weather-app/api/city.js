const axios = require('axios');
const settings = require('../setting');
const city = async (cityName = 'Bangkok', countryCode = 'TH') => {

    const apiUrl = await settings.weatherAPIUrl();
    const apiKey = await settings.weatherAPIKey();
    const url = `${apiUrl}?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;

    return axios.get(url);

}

module.exports = city;