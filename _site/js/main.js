$(document).ready(function(){
	$("li > a").click(
	    function(event) {
	      $('li').removeClass('active');
	      $(this).addClass('active');
	    }
	);
	$("p").has("img").css({"textAlign":"center"});

	function fbCommentsWorkaround() {      
        function resizeFacebookComments(){
            var src = $('.fb-comments iframe').attr('src').split('width='),
            width = $('.fb-comments').parent().parent().width();
            $('.fb-comments iframe').attr('src', src[0] + 'width=' + width);
            $('.fb-comments iframe').css({width: width});
            $('.fb-comments span').css({width: width});
        }

        FB.Event.subscribe('xfbml.render', resizeFacebookComments);

        $(window).on('resize', function(){
            resizeFacebookComments();
        });

        $('.fb-comments iframe').on('load', function() {
            resizeFacebookComments();
            $('.fb-comments iframe').unbind('load');
        });
    }

	
});
