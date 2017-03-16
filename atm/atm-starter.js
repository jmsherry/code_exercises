var R = require('ramda'); // Helps with {}s and []s http://ramdajs.com/docs/#find
var prompt = require('prompt');
prompt.start(); // Lets you prompt the user for info

// Dummy Users
var users = [{
  username: 'Fred',
  password: 'hel',
  balance: 200
}, {
  username: 'Jane',
  password: 'low',
  balance: 500
}, {
  username: 'James',
  password: 'orld',
  balance: 110
}];

// Prompt (which is Async) works like this:
prompt.get(['username', 'password'], function (err, result) {
  if (err) { // Handle error
    return err;
  }

  // Values the user entered are in the results object
  console.log('username', result.username, 'password', result.password);
});
