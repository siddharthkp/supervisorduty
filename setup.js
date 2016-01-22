var inquirer = require('inquirer');
var fs = require('fs');
console.log('Let\'s set up supervisorduty');
var questions = [
    {
        name: 'server_name',
        message: 'What is the name of this server? Example: prod-worker'
    },
    {
        name: 'pagerduty_key',
        message: 'Please enter you pagerduty key'
    }
];

inquirer.prompt(questions, function(answers) {
    fs.writeFile('./config.json', JSON.stringify(answers), function(err) {
      if(err) return console.log(err);
      else console.log('Config file created');
    });
});
