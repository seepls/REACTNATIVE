JS support from Promise objects , control the flow of deferred and asynchronous operations 

A promise is one of the 3 states : 
1. pending: initial  state , not fulfilled or rejected 
2. fulfilled : successful operations 
3. settled : fulfilled or rejected , not pending 


loading img with XHR :
XMLHttpRequest to load an image 

promise flow just for an idea ::

function imgLoad(url){
 return new Promise( function(reject, resolve ) ){
 var request = new XMLHttpRequest();
 request.open('GET', url);
 request.responseType = 'blob' ;
 request.onLoad = function(){
  if( request.status ===200){
   resolve(request.response);
   } else {
    reject(Error(request.statusText));
   }
 };
 request.onerror = function(){
  reject(Error('there was network error '));
 };
 request.send();
 });
}
