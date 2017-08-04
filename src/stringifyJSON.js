// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //use concat method to turn numbers, null, undefined, boolean into string
  //use typeof to determine if obj is object, function or array

  //if object - use recursion to go into object and stringify

  //if array - go into array and check to see if content is stringifiable and place square brackets around

  //if function - return undefined

  var finalString = '';

  if (typeof obj === ('number' || 'boolean' || 'string' || 'null' || ))





};
