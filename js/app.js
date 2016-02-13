$(document).ready(function(){


$('.tweet-compose').focus('click', function(){
	$(this).addClass('tweet-write');
	$(this).parent().children().css('display', 'inline-block');
	$(this).parent().children().children().css('display', 'inline-block');
})

// $(".tweet-compose").on('click', function(){
// 	$(this).css('height', '5em');
// 	$('#tweet-controls').css("display", "inline-block");
// 	$('.button').css('disply', 'inline-block');
// });


// $('.tweet-compose').blur(function(){
// 	$('.tweet-compose').css('height', '2.5em')
// 	$('#tweet-controls').css('display', 'none');
// 	$('#tweet-controls').css('display','none');
// 	$('#')
// })

$('.tweet-compose').keyup(function(){
 	var upper_limit = 140;
 	var text_length = $('.tweet-compose').val().length;
 	var new_count = upper_limit - text_length;
    $('#char-count').text(new_count); 
    if(new_count <= 10) {
    	$('#char-count').css('color', 'red');
    	if(new_count < 0) {
    		$('#tweet-submit').attr('disabled', 'true');
    	}
    }

    else if(new_count > 10) {
    	$('#char-count').css('color', 'gray');
    }

})

})

