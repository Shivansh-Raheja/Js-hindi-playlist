const accountId=5687
let accountEmail="shivansh@google.com"
var accountPassword="256870"
let accountState;

accountCity="Moradabad" //not a good way to utilize the memory

/*
prefer not to use var because of 
functional and block scope
*/

// not allowed accountId=45678
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//accountState will be undefined since there is no input