function PrimeFactorizer(n){
  var originalNum = n;
  var arr = [];
  var answer = {};
  var isPrime = function(n){
    var arrPrime = [];
    if (n<2){
      return false;
    } if (n != Math.round(n)){
      return false;
    } if (n ===2){
      return true;
    }  else {
      for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          arrPrime.push(i);
        }
      } 
      if (arrPrime.length > 0){
        return false;
      }
    } return true;
  };

  var prime = function(num){
    console.log("Made it to function prime");
    while(isPrime(num) === false){
      var i = 2;
      while ( i <= Math.sqrt(originalNum)){
        console.log(i);
        if(num%i === 0){
          arr.push(i);
          newNum = num/i;
          return prime(newNum);
        }else {
          i++;
        }
      } 
    } arr.push(num);   
  };
  prime(n);
  arr.forEach(function(x){
    console.log("arr",arr,"x",x,"answer[x]",answer[x]);
    if (typeof(answer[x.toString()]) === 'undefined'){
      answer[x.toString()] = 1;
      console.log("if",answer[x]);
    } else {
      answer[x.toString()]= answer[x.toString()] + 1;
      console.log("else",answer[x]);
    }

  });
 Object.defineProperty(PrimeFactorizer, "factor",{
  value:answer
 }); 
return answer;
}



