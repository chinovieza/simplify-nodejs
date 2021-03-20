const mongoose = require("mongoose");
const config = {
    autoIndex: true,
    useNewUrlParser: true,
};
const connectionString = process.env.MONGODB_CONNECTION;
// console.log(connectionString);

mongoose.connect(connectionString, config)
.then(() => console.log('Connected to MongoDB ...'))
.catch(err => console.log('Cannot connect to MongoDB : ', err));

const configSchema = new mongoose.Schema({
    config: String,
    value: String
});

const Config = mongoose.model('app_config', configSchema, 'app_config');

async function weatherAPIKey() {
    const data = await Config.findOne({config: "openweathermap_apikey"});
    // console.log(data.value);
    return data.value;
}

// weatherAPIKey();

function weatherAPIUrl() {
    const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
    return apiUrl;
}

module.exports.weatherAPIKey = weatherAPIKey;
module.exports.weatherAPIUrl = weatherAPIUrl;