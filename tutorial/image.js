/*props : 
components can be customized when they are created  with deifferent parameters , these creation parameters are called props .

basic react-native component is : Image  prop named 'source' shows what image is shown */

import React ,{Component} from 'react-native';
import {AppRegistry ,Image } from 'react-native'; 
export default class Man extends Component{
 render(){
  let pic = {
   uri :' '
   };
   return(
   <Image source = {pic} style={{width: 100 , height :120}}/>
   );
   }
 }
 
 
 /* your own components can also use 'props' , this lets you make a single component that is used at many places in your app 
 with slightly different properties in each place , Just have to refer to this.props in the render function
 
 import React ,{Components} from 'react' ;
 import {AppRegistory ,Text,View } from 'react-native';
 class Greetings extends Component{
  render(){
    return(
          <View style = {{ alignItems: 'center'}}>
            <Text> Hello { this.props.name}!</Text>
          </View>
          );
          }
      }
  export default class lots extends Component{
  render(){ 
    return (){
         <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
      );
      }
    }
    
    
// name used as prop , customize geeting component , 
// using prop , text , image , View : can make static screnes : need to know about state for making app change over time 

// alert : displays alert  msgs

import React , {Components} from 'react';
import {View} from 'react-native';
export default class myApp extends Component{
 render(){
  return( 
   <View>
   { 
      alert(" dangerr !!! ")
      }
    </View>
    );
   }
}

// sumup 2 numbers

import React,{Component} from 'react'; 
import {Text} from 'react-native';

export default class myApp extends Component{
 render(){
      function sum(){
      var a = 30,b =40;
      var c = a+b ;
      alert(c);
      }
      sum();
      }
  return (
   <Text> Sample JavaScript Code </Text>
   );
   }
  }
  
  // another example 
  
  import React ,{Component} from 'react';
  import {View ,Text} from 'react-native';
  
  export default class myApp extends Component{
   render(){
     return(
       <View>
        <Codeplay appname = 'HTML Code Play'/>
        <Codeplay appname = 'Android Code Play'/>
        <Codeplay appname = 'SQL Code Play'/>
        </View>
      );
     }
   }
   
 class Codeplay extends Component {
  render(){
   return(
      <Text> you must have
      { this.prop.appname} app</Text>
      );
     }
   }

   

