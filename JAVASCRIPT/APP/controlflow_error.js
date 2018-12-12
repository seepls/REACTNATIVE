/*control flow and error handling 

 2 conditional statements 
 (i) if .. else 
 (ii) switch 
 
 
 following evaluates to false :: 
 1. false 
 2. undefined 
 3. null
 4. 0
 5. NaN
 6. the empty string(" " )
 
 // values of boolean object different from boolean value
 */
 
 switch (var_name)
 {
 label1: 
    break;
 label2 :
    break;
 .
 .
 .
 .
 
 }
 
 /*Exception handling statements : 
 1. throw statements : 
 
 2. (handle by ) try .... catch statement:
 
 when you throw an exception u can refer to its properties in the catch block .
 
 
 
 block example to show the month and catch exception if not present : */
 
 function getMonthName(mo){
  mo = mo -1 ;
  var months = [ " jan", "feb" , "march" , " april" , "may" , "june", "july " , "aug" , "sept" , "oct" , "nov" , "dec " ] ;
  if( month[mo]){
   return months [mo] ; 
   } else {
    throw "InvalidMonthNo" ;}
    
  }
  
  try {
   monthName = " unknown";
   logMyErrors(e);
  }
 
 
 catch(e) {
  monthName = " unknown"; 
  logMyErrors (e);
 }
 
 
 /*finally block ::::
 finally block executes wheather or not the exception is thrown 
 // use of the finally block !!! yaya finally :P 
 to make your script fail gracefully 
 eg : may need to release a resource tied up to the script 
  */
 openMyFile(){
 try{
  writeToMyFile(theData) ;
  }catch(e){
   handleError(e);
  }finally{
    closeMyFile();
  }
 }
 
 
 //if finally block returns a value then this value becomes the return value of the whole try-catch-finally production 
 
 
