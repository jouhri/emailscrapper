$(document).ready(function(){

	function validateEmail($email) {
	  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  if( !emailReg.test( $email ) ) {
	    return false;
	  } else {
	    return true;
	  }
	}


	$("#email").focusout(function(){
		if (validateEmail($(this).val()))
			{
				alert("ouiouioui");
				$.post( "http://localhost:3000/emailscrapped/new", {email: $(this).val()});				
			}
		});
});
