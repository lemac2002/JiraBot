// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');
var user = "mpaquette";

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
  .then(text => getDetails(text.split("{\"expand\":")))
  .catch(err => console.error(err));
  function getDetails(array) {
	  console.log("------------------------");
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
		console.log(key);
		console.log(summary);
		console.log("\"status\":"+stat);
		console.log("\"priority\":"+priority);
		console.log("------------------------");
	  }
  }