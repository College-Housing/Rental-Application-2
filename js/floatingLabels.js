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

function generateUniqID () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 9);
}
function IDGenerator() {

  this.length = 8;
  this.timestamp = +new Date;

  var _getRandomInt = function( min, max ) {
   return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }

  this.generate = function() {
    var ts = this.timestamp.toString();
    var parts = ts.split( "" ).reverse();
    var id = "";

    for( var i = 0; i < this.length; ++i ) {
     var index = _getRandomInt( 0, parts.length - 1 );
     id += parts[index];
    }

    return id;
  }


}


// document.addEventListener( "DOMContentLoaded", function() {
//  var btn = document.querySelector( "#generate" ),
//    output = document.querySelector( "#output" );
//
//  btn.addEventListener( "click", function() {
//    var generator = new IDGenerator();
//    output.innerHTML = generator.generate();
//
//  }, false);
//
// });

$(document).ready(function(){
  var generator = new IDGenerator();
  // output.innerHTML = generator.generate();
  handleValLabel();
  handleLabels();
  $("input").keydown(function(event){
    if(event.keyCode == 13) {
      // console.log("Enter");
      event.preventDefault();
      return false;
    }
  });
  $("#uniqueID").val(generator.generate());


});
