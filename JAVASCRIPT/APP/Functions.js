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
                                
     
                                 
                                 
  
 
                                
                             
 
