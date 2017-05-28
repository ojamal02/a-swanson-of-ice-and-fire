$(document).ready(function(){
 var apiCall = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
 
  function fetch(){
   
    $.getJSON(apiCall, function(json) {
   
     
       var ron_quote = JSON.stringify(json);
       if (ron_quote.length > 125) {
         fetch();
       }
       else {
    $("#jsonData").html(json + " - Ron Swanson" );
        
       }
    

                              });
}
  
  fetch();
});