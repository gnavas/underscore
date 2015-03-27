 var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  // refactor using slice
  first: function(array, n) {
    var newArr = [];
    if (typeof n === 'undefined'){
      return array[0];
    } else { 
    for (var i = 0; i < n; i++) {
      if (typeof array[i] !== 'undefined'){
        newArr.push(array[i]);
        }
      }
    }
    return newArr;
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  // refactor using slice
    last: function(array, n) {
    var newArr = [];
    if (typeof n === 'undefined'){
      return array[array.length-1];
    } else { 
    for (var i = array.length-n; i < array.length; i++) {
      if (typeof array[i] !== 'undefined'){
        newArr.push(array[i]);
        }
      }
    }
    return newArr;
  },

  // Produce a duplicate-free version of the array.
  // Refactor using IndexOf - IndexOf retruns first value so refactor using that
  uniq: function(array) {
    var newArr = [];
    array = array.sort();
    newArr.push(array[0]);
    for (var i = 0; i < array.length-1; i++) {
      if (array[i]!==array[i+1]){
        newArr.push(array[i+1]);
      }
    } return newArr;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    var newArr = [];
    array.map(function(obj){
        newArr.push(obj[key]);
    });
     return newArr;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    return array.indexOf(target) !== -1 ;
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  
 flatten: function (array) {
    var newArr = [];
    function pushElements(array){
    array.forEach(function(x){
      if (Array.isArray(x)){
      return pushElements(x);
      }else {
        newArr.push(x);
      }
    }); 
  } pushElements(array);
    return newArr;
}




};
module.exports = myFunctions;
