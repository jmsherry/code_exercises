var prompt = require('prompt');
prompt.start(); // Lets you prompt the user for info

var _total = 0;
var _budget = null;
var _hasBudget = false;

function calculate(){
  console.log('Add amount');
  prompt.get(['amount'], function (err, result) {
    if (err) { // Handle error
      return err;
    }
    if (!parseFloat(amount)){
      console.log('Format Error: Please enter an amount')
    }
  });
}

function getBudget(){
  console.log('Do you have a budget?? (y/n)');
  prompt.get(['budget'], function (err, result) {
    if (err) { // Handle error
      return err;
    }

    if(result.budget === 'y') {
      console.log('What is your budget?');
      prompt.get(['budget'], function (err, result) {
        if (err) { // Handle error
          return err;
        }
        _hasBudget = true;
        _budget = result.budget;
        calculate();
      });
    } else if (result.budget === 'n') {
      calculate();
    } else {
      console.log('Error: Incorrect format: Answer must be \'y\' or \'n\'');
      getBudget();
    }

  });

function start(){
  console.log('Welcome to the shopping calculator.')
  console.log('Type an amount into the prompt to see your total.');
  console.log('Type \'exit\' at any time to leave the program');
  getBudget();

}
