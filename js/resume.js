$( document ).ready(function() {
	$( "ul" ).css('cursor', 'pointer');
	$( "ul" ).sortable({
	stop: function( event, ui )
		{
			$('.text-sorting').html("A very simple jQuery UI trick, but that's a showcase after all.");
			$('.text-sorting').effect("highlight");
		}
	});
	
	$( "ul" ).disableSelection();
});