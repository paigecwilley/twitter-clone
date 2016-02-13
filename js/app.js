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
    	else if(new_count >= 0){
    		$('#tweet-submit').removeAttr('disabled');
    	}
    }

    else if(new_count > 10) {
    	$('#char-count').css('color', 'gray');
    }

})

$('#tweet-submit').click(function(){
	var tweetWords = $('.tweet-compose').val();
	var newTweet = $('.tweet').clone();
	var myName = $('#myName').html();
	var picture = $('#twitterpic').attr('src');

	newTweet.find('.tweet-text').html(tweetWords);
	newTweet.find('.fullname').html('Paige');
	newTweet.find('.username').html('@paige');
	newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');

	newTweet.prependTo('#stream');
	$('textarea').val('');
	$('#char-count').text('140');
});


$('.tweet-actions').hide();
$('.tweet').mouseenter(function(){
	$(this).find('.tweet-actions').show();
}).mouseleave(function(){
	$(this).find('.tweet-actions').hide();
});

// $('.tweet').click(function(){
// 	$(this).find('.retweets').css('display', 'inline-block');
// 	$(this).find('.favorites').css('display', 'inline-block');
// 	$(this).find('.users-interact').css('display', 'inline-block');
// });



});

