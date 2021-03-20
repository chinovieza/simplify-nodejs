const weather_config = require('./weather_config');

async function getWeatherApiKey() {
    return await weather_config.weatherAPIKey()
}

const x = getWeatherApiKey();

console.log('xxx');
console.log(x);