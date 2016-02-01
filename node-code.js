// setTimeout(function helWo() {
//     console.log('Hello World Again!');
// }, 10000);
// console.log('Hello World!');

var request = require('request');



request("http://api.open-notify.org/iss-now.json", function(err, res, body) {
    if (!err) {
        var issInfo = JSON.parse(body);
        issInfo.iss_position.latitude = issInfo.iss_position.latitude.toFixed(2);
        issInfo.iss_position.longitude = issInfo.iss_position.longitude.toFixed(2);
        
        console.log("The ISS is now at: " + issInfo.iss_position.latitude + " x " + issInfo.iss_position.longitude);

        var dateISS = new Date(issInfo.timestamp*1000)
        console.log("Valid as of: " + dateISS);
    }
    else {
        console.log("there was an error: " + err);
    }
}); 