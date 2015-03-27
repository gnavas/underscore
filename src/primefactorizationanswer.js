function PrimeFactorizer(n){
  var originalNum = n;
  var arr = [];
  this.answer = {};
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
    while(isPrime(num) === false){
      var i = 2;
      while ( i <= Math.sqrt(originalNum)){
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
    if (typeof(this.answer[x.toString()]) === 'undefined'){
      this.answer[x.toString()] = 1;
    } else {
      this.answer[x.toString()]= this.answer[x.toString()] + 1;
    }

  }.bind(this));
}

PrimeFactorizer.prototype = {
    get factor () {
      return this.answer;
    }
};

new PrimeFactorizer(13).factor