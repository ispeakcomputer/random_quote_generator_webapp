$(document).ready(function() {
  var leftQuote = '<i class="fa fa-quote-left fa-4x" aria-hidden="true"></i>';
  var rightQuote = '<i class="fa fa-quote-right fa-4x" aria-hidden="true"></i>';


    $( "#mybutton" ).click(function() {

       $( ".btn-info" ).toggleClass(".btn-primary").animate({ top: '85%' }, "slow");
       $( "#quotespace" ).animate( {top: '50px'}, "slow");


         /*This is where we grab our JSON after button press

         Make sure to load code pen as HTTP or this call doesn't work'*/
         $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {

          /*this is where we display the quote on the id = quoteapace div the p tag. font awesome quotes icons on HTML*/
           $( "#quotespace>#quote" ).html( leftQuote + data.quoteText + rightQuote + "<br>" + "-" + data.quoteAuthor);

         });
    });
 });
