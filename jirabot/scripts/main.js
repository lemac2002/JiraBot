module.exports = function(robot) {
	const fetch = require('node-fetch');
	const List = require('./getList');
	
	robot.respond(/(.*)/i,function(msg){
        var a = msg.match[1];
        var mac = "I do not know this command\n\n";
        mac += "Use @JiraBot help to see a list of availible commands"
        if(a != "help" && a != "list"){
            msg.reply(mac);
        }
    });
	robot.respond(/help/i, function(msg){
		var help = "Here's the list of available commands:\n\n";
		help+="help -- lists available commands\n\n";
		help+="list -- returns a list of all the issues you've reported\n\n";
		help+="details <issuekey> -- returns details for the specified issue\n\n";
		help+="status <status> -- returns a list of issues with the specified status";
		msg.reply(help);
	});
	robot.respond(/list/i, function(msg){
		// This code sample uses the 'node-fetch' library:
		// https://www.npmjs.com/package/node-fetch
		var user = "mpaquette"
		fetch('https://techinsights.atlassian.net/rest/api/3/search?jql=project%3DSWSD%20AND%20reporter%3D'+user, {
			method: 'GET',
			headers: {
				'Authorization': `Basic ${Buffer.from('iprou1@ocdsb.ca:0904zOBp5x4QVNBIe1h638F4').toString('base64')}`,
				'Accept': 'application/json'
			}

		})
		.then(response => {
			console.log(
				`Response: ${response.status} ${response.statusText}`
			);
			return response.text();
		})
		.then(text => msg.reply(List(text.split("{\"expand\":"))))
		.catch(err => console.error(err));
	});
}
