var pop = function(arr){
  return arr.splice(-1,1)[0];
};

var push = function(arr, num){
  if (Array.isArray(arr)) {
arr.splice(-1,0,num);
return arr.length;
  } 
   throw "typeError:Not a array";
  
};

var shift = function(arr){
  return arr.splice(0,1)[0];
};

var unshift = function(arr,num){
  arr.splice(0,0,num);
  return arr.length;
};

var person = {
  name: "Elie",
  age: 27
};


for (var prop in person) {
  console.log(prop + " = " + person[prop]);
}

var array = [1,2,4,5,6];

var myfunct= function(x){
  return x>3;

} ;

var filter = function (arr, callback){
newArr = [];
arr.forEach(function(value){
  if (callback(value)){
newArr.push(value);
  }
  });
return newArr;
};


filter(array, myfunct);




var map = function(arr, callback){
newArr = [];
arr.forEach(function(value){
  newArr.push(callback(value));
  });
return newArr;
};

map(array, myfunct);


var filter = function (arr, callback){
newArr = [];
arr.forEach(function(value){
  if (callback(value)){
newArr.push(value);
  }
  });
return newArr;
};




var myfunct= function(x){
  return x+5;

} ;















