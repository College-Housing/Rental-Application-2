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



});
