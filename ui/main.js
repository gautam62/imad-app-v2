//counter code
var button = document.getElementById('counter');
var counter= 0;

button.onclick= function(){
    
    //Create q request object
    //var request= new XMLHttpRequest();
    
    //caoture the response and store it in a variable
   // request.onreadystatechange = function(){
     // if (request.readyState === XMLHttpRequest.DONE){
          //take some action
      //    if(request.status === 200){
       //       var counter = request.responseText;
       //         var span= document.getElementById('count');
        //        span.innerHTML= counter.toString();
       //   }
    //  }  
      //Not done yet
  //  };
    
    //Make the request
  //  request.open('GET','http://gautam62.imad.hasura-app.io/counter',true);
   // request.send(null);
   
   counter = counter + 1;
   var span= document.getElementById('count');
   span.innerHTML= counter;
};