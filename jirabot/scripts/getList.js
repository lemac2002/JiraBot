module.exports = function getList(array) {
	  var issues = "";
	  issues = "------------------------\n\n";
	  for(var i = 2; i<array.length; i++) {
		var str = array[i];
		//find key
		var key = str.substring(str.indexOf("\"key\":"));
		key = key.substring(0, key.indexOf("\",")+1);
		//find summary
		var summary = str.substring(str.indexOf("\"summary\":"));
		summary = summary.substring(0, summary.indexOf("\",")+1);
		//find priority
		var priority = str.substring(str.indexOf(",\"priority\":"));
		priority = priority.substring(priority.indexOf(",\"name\":")+8);
		priority = priority.substring(0, priority.indexOf("\",")+1);
		//find status
		var stat = str.substring(str.indexOf(",\"status\":")+1);
		stat = stat.substring(stat.indexOf(",\"name\":")+8);
		stat = stat.substring(0, stat.indexOf("\",")+1);
		//print results
		issues += key+"\n\n";
		issues += summary+"\n\n";
		issues += "\"status\":"+stat+"\n\n";
		issues += "\"priority\":"+priority+"\n\n";
		issues += "------------------------\n\n";
	  }
	  console.log(issues);
	  return(issues);
}