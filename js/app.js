$(document).ready(function(){

$(".tweet-compose").on('click', function(){
	$(this).css('height', '5em');
	$('#tweet-controls').css("display", "inline-block");
	$('.button').css('disply', 'inline-block');
});


$('.tweet-compose').blur(function(){
	$('.tweet-compose').css('height', '2.5em')
	$('#tweet-controls').css('display', 'none');
	$('#tweet-controls').css('display','none');
	$('#')
})

$('.tweet-compose').keyup(function(){
	// console.log($('.tweet-compose').val().length);
	// var text = $('#char-count').text();
	// var num = parseInt(text);
	// --num;
	// $('#char-count').text(num);
 	var upper_limit = 140;
 	var text_length = $('.tweet-compose').val().length;
 	var new_count = upper_limit - text_length;
    $('#char-count').text(new_count); 
    if(new_count < 10) {
    	$('#char-count').css('color', 'red');
    }
    else if(new_count > 10) {
    	$('#char-count').css('color', 'gray');
    }
})

})