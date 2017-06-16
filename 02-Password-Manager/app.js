console.log("Executing code in: 'script: app.js'");
console.log(" ");

var storage = require('node-persist'); // this is how you add 3rd party modules in your App.
storage.initSync(); // <-- gets the computer ready to Writing & Storing variables.

// storage.setItemSync('name', 'andrew');
// var name = storage.getItemSync('name');
// console.log("The saved name is: ", name);



// storage.setItemSync('accounts', [{   // Create a variable in the CPU named: 'accounts', and load it wiht one account info.
//   username: 'Andrew',
//   balace: 0
// }]);
//

// var dbase = storage.getItemSync('accounts');  // Create a variable in the Browser named: 'dbase', and load it with the data in the CPU variable 'accounts'

//
// dbase.push({   //Add the account to the Browser variable: 'dbase'
//     username: 'Edxael',
//     balace: 999
// });

// storage.setItemSync('accounts', dbase);   // Sync the data in 'dbase' with the CPU variable 'accounts'

var dbase = storage.getItemSync('accounts');  // Create a variable in the Browser named: 'dbase', and load it with the data in the CPU variable 'accounts'

console.log("The Accounts are: ", dbase);  // The Accounts are:  [ { username: 'Andrew', balace: 0 }, var dbase = storage.getItemSync('accounts');  // Create a variable in the Browser named: 'dbase', and load it with the data in the CPU variable 'accounts' ]

// Run it in Terminal: npm start
