$('#previewBtn').click(function() {
     /* when the button in the form, display the entered values in the modal */

     // $('#c-applicant-f-name').text($('#applicant-f-name').val());
     // $('#c-applicant-l-name').text($('#applicant-l-name').val());

     $("form input[type='text'], form input[type='email'], form input[type='number'], form input[type='checkbox'], form select, form textarea, form input[type='radio']:checked").each(
       function(index){
         var input = $(this);
         if (!(input.val()==="")) {
           $("#prevTable").append('<tr class="d-flex"><th class="col-5">'+input.attr('placeholder')+'</th><td class="col-7">'+input.val()+'</td></tr>');
           // var editBtn= $('#'+input.attr('name'));
           // console.log(editBtn);
           // var editBtnID= input.attr('name');
           // var originalField = $("form input[name='"+editBtnID+"']");
           // var originalField2 = $("form select[name='"+editBtnID+"']");



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


function disableState(countryId, stateId) {
  var country = $(countryId);
  var state = $(stateId);
  country.change(function () {
     // disableState("#country-1","#state-1");
     if (!(country.val() === "United States")) {
       // console.log("not US");
       state.prop("disabled", true);
       state.prop("required", false);
       state.parent().removeClass("has-error has-danger");
       state.next().hide();
       state.val('');


     }
     else {
       // console.log("is US");
       state.prop("disabled", false);
       state.prop("required", true);
       // state.parent().addClass("has-error has-danger");
       state.next().show();

       // state.parent().addClass("has-error has-danger");

     }
  });

  // return country, state;
}

disableState("#country-1","#state-1");
disableState("#country-2","#state-2");
disableState("#country-3","#state-3");
disableState("#country-4","#state-4");
disableState("#country-5","#state-5");

//  $("#country-1").change(function () {
//     disableState("#country-1","#state-1");
// });
