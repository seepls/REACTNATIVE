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
 
 /*recursions :
 
 refer to itself 
 3 ways to refer to itself 
 1. function's name 
 2. argument callee
 3. an in-scope variable that refers to the function*/
 
 var foo = function bar(){
   // statements 
                                
 }
                      
/* all the following equivalent :
 1. bar()
 2. argument.callee
 3 . foo ()
 
 loop and recursion pretty similar :
                                 
    code 1 : */
 var x = 0 ;
 while ( x <10 ) {
 x++;}
                                
                                                        
    //code 2 :           
    function loop(x){
     if(x >=10)
      return ;
    loop(x+1);}loop(0);
                                
     
 /* NESTED FUNCTION AND CLOSURE 
 the nested function is private to the outter function 
 nested function can inherit the arguments and variables of its containing function 
 inner function contains scope of the outter function
 
 summary : 
 1 . inner function can be accessed only from statements in the outter function
 2. inner function forms a closure : inner function can use arguments and variables of outter function 
 while outer function cannot use arguments and variables of inner function 
 */
 function addSquare (a, b ){
  function square(x){
      return x*x ;
              } return square(a) + square(b) ;
 
      }
 
// PREDEFINED FUNCTIONS !! 
 
 eval() : evaluates JS code written as string
 uneval() : creats string representation of source code of an object 
 isFinite () : evaluates wheather a passed value is finite 
 isNaN() : determines weather a value is NaN or not
 // not a number
 
 parseFloat() : passes a string gets a float number 
 parseInt() : 
 decodeURI () : decodes a uniform URI ( uniform resource identifier ) , created by encodeURI 
 decodeURIComponent() : 
 encodeURI(): 
 encodeURIComponent : 
 escape() : 
 unescape() : 
 
                             
 
 
 arrow function :::
syntax
const func = (// parameters ) =>{
 ...
}
  
 called exactly like normal function e.i func(smriti);
                                 
                                 
  
 
                                
                             
 
