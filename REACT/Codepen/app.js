function Person(props){
  return(
       <div className = "person">
       <h1>{props.name}</h1>
       <p>age : {props.age} </p>
       </div>
   
  ); // return the code that u want to render to DOM
  
}

var app = (
  <div>
    <Person name = "smriti" age = "19"/>
    <Person name = "moin" age = "20"/>
    </div>
);
ReactDOM.render(app,document.querySelector('#app'));

