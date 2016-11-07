$(document).ready(function(){

  // Write the brand text with typed.js
  $(function(){
      $(".tpd1").typed({
        strings: ["Ingeniero en sistemas de información."],
        typeSpeed: 10,
        startDelay:500,
        showCursor: false,
        callback: function(){
          $(".tpd2").typed({
            strings: ["Desarrollador web desde 2008."],
            typeSpeed: 10,
            startDelay:500,
            showCursor: false,
          });
        }
      });
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $(this).closest('.collapse').collapse('toggle');
  });

});
