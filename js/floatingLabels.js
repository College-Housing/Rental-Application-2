$(document).ready(function(){

  // $("form input[type='text'], form input[type='email'], form input[type='number'], form input[type='checkbox'], form select, form textarea, form input[type='radio']:checked").each(
  //   function(index){
  //     var input = $(this);
  //     input.attr('placeholder').hide();
  // );
  // )
  if($(".form-group .form-control").val()!=""){

    $(this).siblings("label").addClass("active");
  }else{
     $(this).siblings("label").removeClass("active");
  }

  $(".form-group .form-control").blur(function(){
	   if($(this).val()!=""){
       console.log("label here");
		   $(this).siblings("label").addClass("active");
	   }else{
		    $(this).siblings("label").removeClass("active");
	   }
  });



});
