function keyword followed by name of the function
list of arguments to the function, enclosed  in parantheses seprated by commas 

function square ( number ){
 return number * number ; 
 }
 
 function myFunc( theObject ){
 theObject . make = "Toyota " ;
 }
 myFunc(mycar);
 y = myFunc.make ; // y = toyota 
 
 // factorial 
 var factorial = function fac(n){ return n < 2 ? 1 ; n*fac(n-1) };
 //power 
 var power = function pow( x , y ) { return y <2 ? x ; x * pow(x , y-1)};
 
 
