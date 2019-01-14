import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

class App extends Component {
   state = {
     persons:[
       {name : 'smriti' , age : 19} ,
      { name : 'moin' , age : 20 },
      {name : 'pheona', age : 18}
     ]
   }
   switchNameHandler = (newName)=>{
     //console.log('u cliked me ! ');
     this.setState({
      persons:[
        {name : newName , age : 19} ,
       { name : 'moinSmriti' , age : 20 },
       {name : 'pheona', age : 18}
      ]
     })
    }
    nameChangedHandler = (event)=>{
      this.setState({
        persons:[
          {name : 'Smriti' , age : 19} ,
         { name : event.target.value , age : 20 },
         {name : 'pheona', age : 18}
        ]
       })
    }
  render() {

     const style = {
       backgroundColor : 'white',
       font : 'inherit',
       border: '1px solid blue ',
       padding : '8px',
       cursor :'pointer'
     };
    return (
      <div className = "App">
      <h1> hello</h1>
      <p>ye dekho ! </p>
      <button 
       style = {style}
       onClick={()=> this.switchNameHandler.bind( 'angel')} > switch name </button>
      
      <Person 
      name= {this.state.persons[0].name }
       age= {this.state.persons[0].age}
      
       />
       
      <Person 
      name= {this.state.persons[1].name }
       age= {this.state.persons[1].age}
       click= {this.switchNameHandler.bind(this, 'angel')} 
       changed = {this.nameChangedHandler}
       />
      <Person 
      name= {this.state.persons[2].name }
       age= {this.state.persons[2].age}
       
       />

      </div>


    );
   
  }
  //React.createElement('div', null ,React.createElement('h1',null,' hello smriti !! ') );
}

export default App;
