//Teel jQuery to give up the dollar sign 
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

// var currentUser = $('#un').val();
// var vaildUser = "jdoe2";
// var currentPassword = $('#pass').val();
// var vaildPassword = "HAWK2017";

$('#un').on('keyup focus blur', function(){
    window.currentUser = $(this).val();
});

$('#pass').on('keyup focus blur', function(){
    window.currentPassword = $(this).val();
});

 $('#form').on('submit', function(event) {
 	event.preventDefault();
   if (currentUser=="jdoe2") {
    if (currentPassword=="HAWK2017") {
      var newURL = window.location.href + "main-page";
   window.location.href = (newURL);
      } 
   else{
    alert("Username/password combination not found");
   }  
}
else{
  alert("Username not found")
}
});
 
});