var prompt = require('prompt');
prompt.start(); // Lets you prompt the user for info

var _pet_name = null;
var _mothersMaidenName = null;

console.log('What is the name of your first pet??');
// Prompt (which is Async) works like this:
prompt.get(['pet_name'], function (err, result) {
  if (err) { // Handle error
    return err;
  }
  _pet_name = result.pet_name;

  console.log('What is you mother\'s maiden name??');

  prompt.get(['maiden_name'], function (err, result) {
    if (err) { // Handle error
      return err;
    }
    _mothersMaidenName = result.maiden_name;
    console.log('\n\n******************************************');
    console.log('Your pornstar name is ' + _pet_name + ' ' + _mothersMaidenName);
    console.log('******************************************\n\n');
  });

});
