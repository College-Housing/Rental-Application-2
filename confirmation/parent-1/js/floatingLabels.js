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
  handleValLabel();
  handleLabels();
});
