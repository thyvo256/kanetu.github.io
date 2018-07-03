$(document).ready(function(){
	$("li > a").click(
	    function(event) {
	      $('li').removeClass('active');
	      $(this).addClass('active');
	    }
	);
});
