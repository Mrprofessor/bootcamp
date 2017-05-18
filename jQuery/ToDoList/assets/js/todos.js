
$('ul').on('click', 'li', function (){
	$(this).toggleClass('completed');
});

// Click on X to delete todos
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	event.stopPropagation();
});


$('input[type="text"]').keypress(function (event) {
	// body...
	if(event.which === 13) {
		var todotext = $(this).val();
		$(this).val('');

		// Add li tag
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>")
	}
});

$('.fa-pencil').click(function() {
	$('input[type="text"]').fadeToggle();
});