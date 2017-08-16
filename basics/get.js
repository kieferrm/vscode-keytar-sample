const keytar = require('keytar');
const service = "example service";
const account = "example account";

keytar.getPassword(service, account).then(function(password){
    console.log(`Retrieved password: ${password}`);
});