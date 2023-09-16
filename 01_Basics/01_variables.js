const accountId = 1234
let acountEmail = "vishal@gmail.com"
var accountPassword = "12345"
acountCity = "Pune"
let accountState;

// accountId = 2

accountEmail = "rana@gmail.com"
accountPassword = "212121"
acountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block spoce and function scope
*/

console.table([accountId, accountEmail, accountPassword,acountCity,accountState])



