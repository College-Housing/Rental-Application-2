$('#previewBtn').click(function() {
     /* when the button in the form, display the entered values in the modal */

     // $('#c-applicant-f-name').text($('#applicant-f-name').val());
     // $('#c-applicant-l-name').text($('#applicant-l-name').val());

     $("form input[type='text'], form input[type='email'], form input[type='number'], form input[type='checkbox'], form select, form textarea, form input[type='radio']:checked").each(
       function(index){
         var input = $(this);
         // if (input.attr('type')=='radio') {
         //
         // }
         $("#prevTable").append('<tr class="d-flex"><th class="col-4">'+input.attr('placeholder')+'</th><td class="col-8">'+input.val()+'</td></tr>');
       }
     );

});
