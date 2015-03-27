var fibonacci = function(n) {
  var cache = {};
  var x = n;
  var fibs = function(n){ 
    if(n===1){
      cache[0] = 0;
      cache[n] = n;
      var fib = function(n,x){
       if (typeof cache[x] !== 'undefined' ) {
        return cache[x];
      }else{
        cache[n] = cache[n-1] + cache[n-2];
        fib(n+1,x);
      }
    };
    fib(2,x);
  } else {
    fibs(n-1);
  }
  return cache[x];
}; 
fibs(x);
return cache[x];
};
