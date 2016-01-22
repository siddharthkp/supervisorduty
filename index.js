var shell = require('shelljs');
var PagerDuty = require('pagerduty');
var os = require('os');
var config = require('./config.json');
var pager;

var command = shell.exec('sudo supervisorctl status | grep FATAL');
var statuses = command.output;

if (statuses.length) raisePagerDutyAlert(statuses);
else console.log('All good, nothing to see here');

function raisePagerDutyAlert() {
    var message = 'Some supervisor processes are in FATAL state on ' + config.name + ' ' + os.hostname();
    return;
    var pager = new PagerDuty({
        serviceKey: config.pagerduty_key
    });
    pager.create({
        description: message,
        details: {
            info: statuses
        }
    });
}
