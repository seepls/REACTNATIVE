/*react uses : web components
react-native uses : native components
to understand react-native : first get long react stuff like 
- JSX
- components
- state 
- props
*/


import React , {Component} from 'react' ;
import {Text ,View} from 'react-native';
export default class HelloWorldApp extends Component {
render(){
 return(
      <View>
      <Text> hello world!! 
      </Text>
      </View>
      );
}
}

//ES2016 == ES6


//Text and View

import React , { Components} fro m'react';
import { Text ,Veiw} from 'react-native' ;
export default class myApp extends Component {
render(){
return(
 <View>
  <Text> View and Text 
  </Text>
  <View>
  );
  }
}


//Variable

import React , {Component} from 'react';
import {Text , StyleSheet} from 'react-native';
const name = "HTML Code Play";
export default class myApp extends 
Component{
render(){
return(
 <Text> Best app name is {name}
 </Text>
 );
 }
 }
 
 
 //inline style
 
 
 import React, {Component} from 'react';
 import {Text} from 'react-native';
 
 export default class myApp extends Component{
 render(){
  return(
   <Text style= {{ fontSize: 25, color: 'red'}}>Inline Style</Text>
   );
   }
   }
   
   // prints inline style with fontsize 25 and color red 
   
 // internal style 
 
 import React,{Component} from 'react';
 import {Text ,StyleSheet} from 'react native';
 export default class myApp extends Component{
 render(){
  return(
   < Text style =
   {styles.styleName}>InternalStyle</Text>
   );
   }
   
 }
 
 const styles = StyleSheet .create({
 styleName: {
  fontSize: 60,
  color: " green"
  }
});
 }

//variable in inline style sheet

import React,{ Components} from 'react';
import {Text , StyleSheet} from 'react-native';
const a = 100;
export default class myApp extends Component{
 render(){
   return(
     <Text style = {{ fontSize: a}}>WElcome</Text>
    );
 }
}

// variable in internal styleSheet

import React, {Component} from 'react';
import { Text , StyleSheet} from 'react-native';
const clr = "pink";
export default class myApp extends Component{
 render(){
  return(
   <Text style = {styles.styleName} Internal Style</Text>
   );
 }
}
const styles = StyleSheet.create({
  styleName : { 
    fontSize : 35 ,
   color : clr 
  }
});


 
  
