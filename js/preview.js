
$('#previewBtn').click(function() {


     $("form").validator('reset');
     $('form').validator('update');
     $('form').validator('validate');
     $("form input[type='text'], form input[type='email'], form input[type='number'], form input[type='checkbox'], form select, form textarea, form input[type='radio']:checked").each(
        function(index){
          var input = $(this);
          if (!(input.val()==="") && !(input.val()===null) && !(input.hasClass('hidden')) ) {
            $("#prevTable").append('<tr class="d-flex"><th class="col-5">'+input.attr('data-table')+'</th><td class="col-7">'+input.val()+'</td></tr>');
          }
          else {
            return ;
          }
        }
      );

});

$('#editBtn').click(function() {
  $("#prevTable").empty();
  setActiveStep(0);
  setActivePanel(0);
  window.scroll(0, 265);


})
