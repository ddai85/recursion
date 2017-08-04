// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here

  //use browser built in querySelectorAll to fetch each selector matching 'className'
  var classNameList = [];

  findChildren = function(childList){
  	var childArray = Array.from(childList);
  	for (var i = 0; i < childArray.length; i++){
  		if (childArray[i].classList.contains(className)){
  			classNameList.push(childArray[i]);
  		}
  		if (childArray[i].children){
        findChildren(childArray[i].children);
  	  }
  	}
  }
  findChildren(document.documentElement.children);
  //console.log(Array.from(document.getElementsByClassName(className)))
  return classNameList;

  //var selectorArray = document.querySelectorAll('.' + className);
  //return Array.prototype.slice.apply(selectorArray);
  

  //once class is fetched, store element into array use .clone() method

  //return array with array of elements
};
