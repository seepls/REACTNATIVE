/*1. for :
  syntax :
   for ([initialExpression];[conditions];[incrementExpression])
 example :
 conts the number of selected options in a scrolling list */

<form name = "selecForm">
  <p>
     <label for = " musicTypes"> choose some option and click < /label>
     <select id = "musicTypes" name = "musicTypes" multiple = "multiple">
      <option selected = "selected"< R&B</option>
      <option> Jazz < /option>
      <option> indian < /option>
      <option> american < /option>
      <option> pop < /option>
      <option> classical < /option>
     </select>
   </p>
   <p> input id = " buttn' type = " button" value= " number selected "  </p>
 </form>
 
 <script>
 function howMany(selectObject){
  var numberSelected = 0;
  for ( var i = 0 ; i < selectObject.options.length; i++){
  if(selectObject.options[i].selected){
   numberSelected++;
   }
 }
return numberSelected ;
}

var btn = document.getElementById("btn");
btn.addEventListener("click" , function(){
alert('Number of options selected ' + howMany(document.selectForm.musicTypes))
});
</script>

// do ... while 

do 
  statement
while (condition) ;
 var i = 0 ; 
do {
  i + = 1 ;
  console.log(i);
} while(i < 5) ;


// while ..

while ( condition)
  statement 
  
var n = 0 ; 
var x = 0 ; 
while ( n < 3 ) 
{
   n ++ ; 
  x + = n;
}


labeled statement ::
 label provides a statement with an identifier 
 
markLoop : 
while(theMark == true ){
  doSomething();
}

break statement :
terminate a loop 

for( var i = 0 ; i< a.length ; i++){
   if(a[i] == theValue){
     break ; 
   }
}


eg2 :
breaking to a label 

var x = 0 ;
var z = 0 ; 
labelCancelLoops: while (true){
   console.log(" outter loops " + x );
  x + = 1 ;
  z = 1 ;
  while( true) {
    console.log("Inner loops :" + z );
    z+=1 ;
    if( z ===10 && x === 10){
      break labelCancelLoops;
    } else if (z ===10){
      break ;
    }
  }
}


//continue statment 
// used to restart a while , do-while ,for or label statement 

- when used without a label , terminates the current iteration  and continues the next iteration 

checkiandj:
 while(i < 4 ){
   console.log(i);
   i+=1 ;
   checkj:
   while(j>4){
     console.log(j);
     j -= 1 ;
     if((j%2)==0){
       continue checkj;
     }
    continue.log(j + " is odd " );
   }
   console.log(" i = " + i );
   console.log("j= " + j );
 }




for .. in 

syntax : 
for ( variables in object ){
   statements 
}

eg : takes as its argument an object and object's name . then iterates over all the object properties and return a string that lists property names and their values 

function dump_props( obj , obj_names){
   var result = "  ";
  for ( var i  in obj){
    result + = obj_name+ "." + i + " = " + obj[i] + " <br> ";
  }
  
  result + = "<hr>";
  return result ;
}

for an object car with properties make and model result would be:
car.make = ford 
car.model = Mustang

array elements can be iterated using for .. in loop




 for ... of 

creats a loop iterating over iterable objects Array , map , set , arguments 
invoking custom iteration hook with statements to be executed for the value of each distinct property 

 difference in for .. in and for .. of :::
 
 let arr = [3 ,5 ,7 ];
arr.foo = " hello " ;
for (let i in arr ){
  console.log(i); 
} // output :: 0 , 1 , 2 , foo 

for ( let i of arr ) {
  console .log(i) ;
} // output : 3 , 5 ,7


  
    
