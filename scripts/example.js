// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = function(robot) {
	robot.hear(/help/i, function(msg){
		var help = "Here's the list of available commands:\n\n";
			help+="help -- lists available commands\n\n";
			help+="list -- returns a list of all the issues you've reported\n\n";
			help+="details <issuekey> -- returns details for the specified issue\n\n";
			help+="status <status> -- returns a list of issues with the specified status";
			msg.reply(help);
	});

}


 
