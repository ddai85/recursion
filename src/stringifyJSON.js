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
  
  merge = function(add){
  	finalString = finalString.concat(add);
  }

  if (typeof obj === 'function'){
  } else
  if (typeof obj === 'undefined'){
  } else

  if (typeof obj === 'string'){
  	merge(obj);
  	finalString = '\"' + finalString + '\"';
  } else
  if (obj === null){
    finalString = 'null';
  } else

  if (typeof obj === 'number' || typeof obj === 'boolean'){
  	merge(obj);
  } else

  if (Array.isArray(obj)){
  	merge('[');
  	if (obj.length > 0){
  	  finalString = finalString.concat(stringifyJSON(obj[0]));
  	  for (var i = 1; i < obj.length; i++){
  		finalString = finalString.concat(',');
  		finalString = finalString.concat(stringifyJSON(obj[i]));
      } 
    }
    finalString = finalString.concat(']');
  } else

  if (typeof obj === 'object'){
    finalString = finalString.concat('{');
  	for (var i in obj){
  	  if (typeof obj[i] === 'undefined' || typeof obj[i] === 'function'){
  	  	continue;
  	  }
  	  finalString = finalString.concat(stringifyJSON(i));
  	  finalString = finalString.concat(':');
  	  finalString = finalString.concat(stringifyJSON(obj[i]));
      finalString = finalString.concat(',');
    }
    if (finalString != '{'){
    	finalString = finalString.substring(0, finalString.length - 1)
    }
    finalString = finalString.concat('}');
  }

  return finalString;

};
