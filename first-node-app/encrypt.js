const bcrypt = require('bcrypt');
const password = 'password';
const myHash = '$2b$10$6iPLmt4tJgNoUN7q7DjZyutvJfeP.bhKecUeuxyerh3aVuB5HFczu';

bcrypt.compare(password, myHash, function(err, res){
    if (res === true) {
        console.log('Password Match!');
    } else {
        console.log('Mismatch please try again!!');
    }
});

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(password, salt);
// console.log(hash);