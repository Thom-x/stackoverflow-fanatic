var request = require('request');

console.log('Sending request to: ' + process.env.APP_URL);
request(process.env.APP_URL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});