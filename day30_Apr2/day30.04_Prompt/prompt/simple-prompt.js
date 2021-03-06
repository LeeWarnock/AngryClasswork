/*
 * simple-prompt.js: Simple example of using prompt.
 *
 * (C) 2010, Nodejitsu Inc.
 *
 */

var prompt = require('./prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['username', 'email'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});