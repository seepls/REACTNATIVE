::BUILDING FIRST APP 

two methods :
1. create -react-native-app : but supports only pure JS applications 
2. fully installing react native . yes!! this is the solution my boy ! 


1.here we first go with developing on create -react-native-app:
command to install 

npm install -g create-react-native-app

2. now creating the project

create-react-native-project name 
cd name 
npm start 
this command will install JS dependencies , also create a boiler plate for the application :

App.js : has the core code !
App.test.js : simple test file 
package.json : metadata about the project and its dependencies 
you will always start by modifying App.js ::

so the directory structure  using create-react-native-app : 
|_App.js:       //has the core code !
|_App.test.js.     //:simple test file 
|_README.md
|_app.json
|_node_modules
|_package.json      //metadata about the project and its dependencies 
|_yarn.lock

:::::

now if you start your project using react native cli 

the directory structure would be : 
|-_tests_
|-android
|-app.json
|-index.android.js // my react native code
|-index.ios.js. // my react native code 
|-ios 
|-node_modules.  // consists of the dependencies installed via npm 
|-package.json 
|-yarn.lock

1.running app on iOS :
cd name 
react-native run-ios 

2. run on android : 
react-native run-android 




::: exploring the sample code : 



1. starter code in create-react-native-app : 

import React from "react";
import {StyleSheet , Text , View } from "react-native";

export default class App extends React.Component{
render(){
 return(
 <View style = styles.container}>
 <Text> Hello , world ! </Text>
 </View>
 );
 }
}


const styles = StyleSheet.create({
container:{
flex : 1 ,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center"
}
});



2. code in react native : starter code in index.ios.js  and index.android.js  for full react native projects 

import React ,{Component} from 'react';
import {
 AppRegistry ,
 StyleSheet,
 Text ,
 View 
}from 'react-native';

export default class FirstProject extends Component {
render(){
  return (
    <View style = { styles.container}>
      <Text style ={ styles.welcome}>
        Welcome to React Native !
      </Text>
      <Text style = {styles.instructions}>
        To get started , edit index.ios.js 
      </Text>
      <Text style = {styles.instructions}>
            to get started , edit index.ios.js 
      </Text>
      </View>
      );
   }
}

const styles = StyleSheet.create({
 container :{
  flex : 1 ,
  justifyContent : 'center',
  alignItems: 'center' ,
  backgroundColor: '#F5FCFF',
 },
 welcome:{
   fontSize : 20 ,
   textAlign: 'center', 
   margin:10,
 },
 instruction: {
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
 },
 });
            


you MUST IMPORT every native-provided module you work with , in this SYNTAX !

react <div> == <Text> in react native 
 react <span> == <View> in react native 
 

 
 
 all styling in react native done using style objects than stylesheets.
 standard method of handling styling : Style Sheet library 
 
 Layout logic handled using  flexbox .
 we build layouts with flexbox .
 









