var inquirer = require('inquirer');
var fs = require('fs');
var chalk = require('chalk');

console.log(chalk.blue('\n\n\n\------------------------------ \n'));
console.log(chalk.blue('Let\'s set up supervisorduty \n'));

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
    fs.writeFile(__dirname + '/config.json', JSON.stringify(answers), function(err) {
        if(err) return console.log(err);
        else {
            console.log(chalk.blue('Config file created'));
	    console.log(chalk.blue('Add the following to your cron file:'));
	    console.log(chalk.blue('*/15 * * * * node ' + __dirname + ' & npm start'));
	    console.log(chalk.blue('\n------------------------------\n\n\n'));
	}
    });
});
