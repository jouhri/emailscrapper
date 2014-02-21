$(document).ready(function(){
	$("#email").focusout(function(){
		$.post( "new_email_scrapped", {email: $(this).val()});
		});
});
