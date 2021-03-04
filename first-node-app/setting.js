const Settings = {
    secretKey: `asdfasdf`,
    userPass: `jkl;jkl;`,
    databaseName: `chinoDatabase`
}

const getSecretKey = () => {
    return Settings.secretKey;
}

// module.exports = Settings;
module.exports.getSecretKey = getSecretKey;
module.exports.userPass = Settings.userPass;
module.exports.databaseName = Settings.databaseName;