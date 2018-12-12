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



  
    
