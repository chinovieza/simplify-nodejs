const jwt = require('jsonwebtoken');
const profile = {id: 1, name: 'Monkey D. Luffy', affiliations: 'Straw Hat Pirates'};
const key = "CHINOVIEZA";
const token = jwt.sign(profile, key, {expiresIn: 60*5});
console.log(token);

try {
    const data = jwt.verify(token, key);
    console.log(data);
} catch (error) {
    console.log(error);
}