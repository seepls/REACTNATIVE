/*
following kind of operators : 
1. Assignment : similar to c 
2. comparision  : compares the operand and returns a logic value 
when comparing operators not of the same kind , JS converts them '
!= ( not equal ) == ( equal)  checking 
=== ( strictly equal) 
!== : striclty not equal 
3 .arithmetics operators :
 same except for  (**) = exponential operator 
4.unary operator : 
 (i) : delete : 
   delete objectName ; 
   delete objectName.property;
   delete objectName[index] ; 
   delete property ; // used to delete within a with statement 
   
   delete operator if succeds set the property or element to undefined 
   delete statement. in array : still holds the rest of the indexes values as it is , just returns undefiend value which ever index you delete 
   
   (ii) typeof operator  : 
          
             typeof operand
             typeof(operand ) 
    eg : 
    typeof true ; // returns boolean 
    typeof null ; // returns object 
    
   (iii) void operator : 
       void( expression)
       void expression
       
       // specifies an expression to be evaluated without returning a value .
     expression is a JS : expression to evaluate 
     
   (iv) in operator :
       returns true if specified property is in the specified object 
       syntax : 
        propNameOrNumber in objectName 
    (v) instanceof : returns true if object is of specified object isof the specied object type
        syntax : objectName  instanceof objectType
        
        used to confirm type of object at runtime 
        
ExPression::: 


primary expression 
this : 
refer to current object. this refers to calling object in method 
new : 
create instance of user-defined object type or of one of the built in object types 

syntax : 
var objectName = new objectType([param1 , param 2 ..... paraml])

super : 
used to call functions on an object's parent 
useful with classes to call parent constructor 

super([arguments]);
super.functionOnPrent([argument]);

spread operator : 
allows expression to be expanded in places where multiple arguments or multiple elements are expected 



  
