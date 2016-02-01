// setTimeout(function helWo() {
//     console.log('Hello World Again!');
// }, 10000);
// console.log('Hello World!');

var request = require('request');
var prompt = require('prompt');

prompt.start();
  
  var userLoc;


Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}


 prompt.get('location', function (err, result) {
     
    userLoc = result.location;

    if (!err) {
    userLoc = result.location;
    //return userLoc;
    }
     else {
        console.log("there was an error: " + err);
    }
    //things that run after prompt is 'answered'
    
    
    var requestURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+userLoc
      request(requestURL, function(err, response, body) {
       
          var bodyObject = JSON.parse(body)
          
          //console.log(bodyObject);
              var lat1 = bodyObject.results[0].geometry.location.lat
              var lon1 = bodyObject.results[0].geometry.location.lng
           
           
          request("http://api.open-notify.org/iss-now.json", function(err, res, body) {
            if (!err) {
                var issInfo = JSON.parse(body);
                var lat2 = issInfo.iss_position.latitude;
                var lon2 = issInfo.iss_position.longitude;
            
            // issInfo.iss_position.latitude = issInfo.iss_position.latitude.toFixed(2);
            // issInfo.iss_position.longitude = issInfo.iss_position.longitude.toFixed(2);
            
            // console.log("The ISS is now at: " + issInfo.iss_position.latitude + " x " + issInfo.iss_position.longitude);
    
            // var dateISS = new Date(issInfo.timestamp*1000)
            // console.log("Valid as of: " + dateISS);
           }
           else {
               console.log("there was an error: " + err);
           }
               
           
           var R = 6371000; // metres
           var φ1 = lat1.toRadians();
           var φ2 = lat2.toRadians();
           var Δφ = (lat2-lat1).toRadians();
           var Δλ = (lon2-lon1).toRadians();

           var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                   Math.cos(φ1) * Math.cos(φ2) *
                   Math.sin(Δλ/2) * Math.sin(Δλ/2);
           var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
           
           var d = R * c;
    
           console.log("Your distance from the ISS is: " + d);
    
      })

  });

}); 


  //runs at load
  
  
  
  //prompt(){
   
  //         google(){
    
  //              iss() {}
    
  //              equation
  //          }
  // }
  // 