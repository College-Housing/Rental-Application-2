function handleLabels() {
  $(".form-group .form-control").blur(function(){
	   if($(this).val()!=""){
		   $(this).siblings("label").addClass("active");
	   }else{
		    $(this).siblings("label").removeClass("active");
	   }
  });
}

function handleValLabel() {
  if($(".form-group .form-control").val()!=""){

    $(this).siblings("label").addClass("active");
  }else{
     $(this).siblings("label").removeClass("active");
  }

}

$(document).ready(function(){

  // $("form input[type='text'], form input[type='email'], form input[type='number'], form input[type='checkbox'], form select, form textarea, form input[type='radio']:checked").each(
  //   function(index){
  //     var input = $(this);
  //     input.attr('placeholder').hide();
  // );
  // )

  handleValLabel();
  handleLabels();
  // addToEmails();
  // function checkEmailDup(email) {
  //   var filledEmail = [];
  //   $("input[type='email']").each(function(){
  //     // mailField.addEventListener("change", e => {
  //       const emailVal = email.val();
  //       const hasMail = filledEmail.find(x => x === emailVal);
  //       if (!hasMail) {
  //         filledEmail.push(emailVal);
  //         return true;
  //       }
  //       else {
  //         return false;
  //       }
  //       console.log('filled mails without duplicates', filledEmail)
  //     // });
  //   });
  // }
  // checkEmailDup();


});
