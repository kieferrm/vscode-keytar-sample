const keytar = require('keytar');
const service = "example service";
const account = "example account";

keytar.setPassword(service, account, "qwertyuiop").then(function() {
    return keytar.getPassword(service, account)
}).then(function(password){
    console.log(`Stored password: ${password}`);
});