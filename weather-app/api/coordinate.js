const axios = require('axios');
const settings = require('../setting');
const location = async (lon = 98.9048538, lat = 18.7967139) => {

    const apiUrl = await settings.weatherAPIUrl();
    const apiKey = await settings.weatherAPIKey();
    const url = `${apiUrl}?lon=${lon}&lat=${lat}&appid=${apiKey}&units=metric`;

    return axios.get(url);

}

module.exports = location;