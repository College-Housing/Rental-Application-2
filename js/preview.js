$('#previewBtn').click(function() {
     /* when the button in the form, display the entered values in the modal */

     // $('#c-applicant-f-name').text($('#applicant-f-name').val());
     // $('#c-applicant-l-name').text($('#applicant-l-name').val());

     // $("form input[type='text'], form input[type='email'], form input[type='number'], form input[type='checkbox'], form select, form textarea, form input[type='radio']:checked").each(
     //   function(index){
     //     var input = $(this);
     //     var editBtnID= input.attr('name');
     //     var originalField = $("form input[name='"+editBtnID+"']");
     //     // console.log(originalField);
     //     // var  currentPanel = $(".js-active");
     //     // var panelTitle = currentPanel.children(".multisteps-form__title").text();
     //     var panelTitle = originalField.parent().parent().parent().parent().children(".multisteps-form__title").text();
     //     var tableAppend;
     //     if (!(input.val()==="")) {
     //       if (panelTitle==="Applicant Information") {
     //         tableAppend = "#step1Table";
     //       }
     //       else if (panelTitle==="Guarantors") {
     //         tableAppend = "#step2Table";
     //       }
     //       else if (panelTitle==="Rental History") {
     //         tableAppend = "#step3Table";
     //       }
     //       else if (panelTitle==="Employment") {
     //         tableAppend = "#step4Table";
     //       }
     //       else if (panelTitle==="Terms and Conditions") {
     //         tableAppend = "#step5Table";
     //       }
     //       $(tableAppend).append(`
     //                                <tr class="d-flex">
     //                                  <th class="col-5">`+input.attr('placeholder')+`</th><td class="col-7">`+input.val()+`</td>
     //                                </tr>
     //                              `);
     //       // var originalField2 = $("form select[name='"+editBtnID+"']");
     //
     //     }
     //     else {
     //       return ;
     //     }
     //   }
     // );
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     $("form input[type='text'], form input[type='email'], form input[type='number'], form input[type='checkbox'], form select, form textarea, form input[type='radio']:checked").each(
        function(index){
          var input = $(this);
          if (!(input.val()==="") && !(input.val()===null)) {
            $("#prevTable").append('<tr class="d-flex"><th class="col-5">'+input.attr('data-table')+'</th><td class="col-7">'+input.val()+'</td></tr>');
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


// function disableState(countryId, stateId) {
//   var country = $(countryId);
//   var state = $(stateId);
//   country.change(function () {
//      // disableState("#country-1","#state-1");
//      if (!(country.val() === "United States")) {
//        // console.log("not US");
//        state.prop("disabled", true);
//        state.prop("required", false);
//        state.parent().removeClass("has-error has-danger");
//        state.next().hide();
//        state.val('');
//
//
//      }
//      else {
//        // console.log("is US");
//        state.prop("disabled", false);
//        state.prop("required", true);
//        // state.parent().addClass("has-error has-danger");
//        state.next().show();
//
//        // state.parent().addClass("has-error has-danger");
//
//      }
//   });
//
//   // return country, state;
// }
//
// disableState("#country-1","#state-1");
// disableState("#country-2","#state-2");
// disableState("#country-3","#state-3");
// disableState("#country-4","#state-4");
// disableState("#country-5","#state-5");

// var countryList= $(".country");


//  $("#country-1").change(function () {
//     disableState("#country-1","#state-1");
// });

var readrootText = `<div class="readrootContainer">
  <h4 class="multisteps-form__title">Rental History</h4>
  <div class="form-row mt-4">
    <div class="col">
      <h5 class="card-title">Rental Address:</h5>
      <div class="form-row mt-4">
        <div class="col-lg-6 col-sm-12 form-group">
          <input disabled required data-table="Rental country" data-error="Please enter Country."  placeholder="Country" name="rental-history-country" type="text" value="United States" class="multisteps-form__input form-control country" ></input>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <select required data-table="Rental state" data-error="Please choose an answer." placeholder="State" name="rental-history-state" class="multisteps-form__select form-control state">
            <option value="" disabled selected >State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <div class="help-block with-errors"></div>
        </div>
      </div>
      <div class="form-row mt-4">
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <input required data-table="Rental city" data-error="Please enter City"  placeholder="City" name="rental-history-city" type="text" class="multisteps-form__input form-control">
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <input required data-table="Rental Zip num." data-error="Please enter Zip." placeholder="Zip number" name="rental-history-zip" type="text" class="multisteps-form__input form-control">
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <textarea required data-table="Rental address 1" data-error="Please enter your address." name="rental-add-1" type="text" class="form-control textarea-form" placeholder="Address 1"></textarea>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <textarea required data-table="Rental address 2" data-error="Please enter your address." name="rental-add-2" type="text" class="form-control textarea-form" placeholder="Address 2"></textarea>
          <div class="help-block with-errors"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col-lg-6 col-sm-12 form-group">
      <input required data-table="Rental date" data-error="Please enter Rental dates." name="rental-history-date" type="text" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" class="multisteps-form__input form-control" placeholder="Rental Dates">
      <div class="help-block with-errors"></div>
    </div>
    <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
      <input required data-table="Rental monthly rent" data-error="Please enter Monthly Rent."  placeholder="Monthly Rent" name="rental-history-monthly-rent" type="text" class="multisteps-form__input form-control" placeholder="Monthly Rent">
      <div class="help-block with-errors"></div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col form-group">
      <input required data-table="Reason for leaving" data-error="Please enter Reason for leaving." name="reason-for-leaving" type="text" class="multisteps-form__input form-control" placeholder="Reason For leaving">
      <div class="help-block with-errors"></div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col">
      <h5 class="card-title">Landlord Information:</h5>
      <div class="form-row mt-4">
        <div class="col-lg-6 col-sm-12 form-group">
          <input required data-table="Landlord first name" data-error="Please enter First Name." name="landlord-first-name" type="text" class="multisteps-form__input form-control" placeholder="First Name">
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <input required data-table="Landlord last name" data-error="Please enter Last Name." name="landlord-last-name" type="text" class="multisteps-form__input form-control" placeholder="Last Name">
          <div class="help-block with-errors"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col-lg-6 col-sm-12 form-group">
      <input required data-table="Landlord Mobile/Phone num." data-error="Please enter Phone number." name="landlord-phone" type="text" class="multisteps-form__input form-control" placeholder="Phone Number">
      <div class="help-block with-errors"></div>
    </div>
    <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
      <input required data-table="Landlord email address" data-error="Please enter Email address." name="landlord-email" type="email" class="multisteps-form__input form-control" placeholder="Email address">
      <div class="help-block with-errors"></div>
    </div>
  </div>
  <a class="rem-rental-history" id="remBtn" onclick="this.parentNode.parentNode.removeChild(this.parentNode);">x Remove Rental History Entry</a>
</div>`;

var readrootText_2 = `                      <div class="readrootContainer">
                        <h4 class="multisteps-form__title">Employment</h4>
                        <div class="form-row mt-4">
                          <div class="col">
                            <h5 class="card-title">Employer Information:</h5>
                            <div class="form-row mt-4">
                              <div class="col form-group">
                                <input required data-table="Employer name" data-error="Please enter Name." name="employer-name" type="text" class="multisteps-form__input form-control" placeholder="Employer Name">
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                            <div class="form-row mt-4">
                              <div class="col-lg-6 col-sm-12 form-group">
                                <input required data-table="Employer Mobile/Phone num." data-error="Please enter Phone number." name="employer-phone" type="text" class="multisteps-form__input form-control" placeholder="Employer Phone number">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <input data-table="Employer email" data-error="Please enter a valid email address" name="employer-email" type="email" class="multisteps-form__input form-control" placeholder="Employer Email Address(optional)">
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col">
                            <h5 class="card-title">Employer Address (optional):</h5>
                            <div class="form-row mt-4">
                              <div class="col-lg-6 col-sm-12 form-group">
                                <input  disabled data-table="Employer country" name="employer-country" type="text" class="multisteps-form__input form-control country" value="United States" placeholder="Employer Country"></input>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <select data-table="Employer state" data-error="Please choose a state" name="employer-state" placeholder="Employer State" class="multisteps-form__select form-control state">
                                  <option value="" disabled selected >State</option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="DC">District Of Columbia</option>
                                  <option value="FL">Florida</option>
                                  <option value="GA">Georgia</option>
                                  <option value="HI">Hawaii</option>
                                  <option value="ID">Idaho</option>
                                  <option value="IL">Illinois</option>
                                  <option value="IN">Indiana</option>
                                  <option value="IA">Iowa</option>
                                  <option value="KS">Kansas</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="LA">Louisiana</option>
                                  <option value="ME">Maine</option>
                                  <option value="MD">Maryland</option>
                                  <option value="MA">Massachusetts</option>
                                  <option value="MI">Michigan</option>
                                  <option value="MN">Minnesota</option>
                                  <option value="MS">Mississippi</option>
                                  <option value="MO">Missouri</option>
                                  <option value="MT">Montana</option>
                                  <option value="NE">Nebraska</option>
                                  <option value="NV">Nevada</option>
                                  <option value="NH">New Hampshire</option>
                                  <option value="NJ">New Jersey</option>
                                  <option value="NM">New Mexico</option>
                                  <option value="NY">New York</option>
                                  <option value="NC">North Carolina</option>
                                  <option value="ND">North Dakota</option>
                                  <option value="OH">Ohio</option>
                                  <option value="OK">Oklahoma</option>
                                  <option value="OR">Oregon</option>
                                  <option value="PA">Pennsylvania</option>
                                  <option value="RI">Rhode Island</option>
                                  <option value="SC">South Carolina</option>
                                  <option value="SD">South Dakota</option>
                                  <option value="TN">Tennessee</option>
                                  <option value="TX">Texas</option>
                                  <option value="UT">Utah</option>
                                  <option value="VT">Vermont</option>
                                  <option value="VA">Virginia</option>
                                  <option value="WA">Washington</option>
                                  <option value="WV">West Virginia</option>
                                  <option value="WI">Wisconsin</option>
                                  <option value="WY">Wyoming</option>
                                </select>
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                            <div class="form-row mt-4">
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <input data-table="Employer city" data-error="Please enter a city" name="employer-city"type="text" class="multisteps-form__input form-control" placeholder="Employer City">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <input data-table="Employer Zip num." data-error="Please enter Zip num." name="employer-zip" type="text" class="multisteps-form__input form-control" placeholder="Employer Zip">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <textarea required data-table="Employer address 1" data-error="Please enter your address." name="applicant-add-1" type="text" class="form-control textarea-form" placeholder="Address 1"></textarea>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <textarea required data-table="Employer address 2" data-error="Please enter your address." name="applicant-add-2" type="text" class="form-control textarea-form" placeholder="Address 2"></textarea>
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                            <br>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col-lg-6 col-sm-12 form-group">
                            <input required data-table="Your position" data-error="Please enter your Position." name="position-held" type="text" class="multisteps-form__input form-control" placeholder="Your Position">
                            <div class="help-block with-errors"></div>
                          </div>
                          <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                            <input required data-table="Monthly gross salary" data-error="Please enter your Monthly gross salary." name="monthly-gross-salary" type="text" class="multisteps-form__input form-control" placeholder="Monthly Gross Salary">
                            <div class="help-block with-errors"></div>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col">
                            <h5 class="card-title">Employment Dates:</h5>
                            <div class="form-row mt-4 date-from-to-row">
                              <div class="col-5 col-sm-5 mt-4 mt-sm-0 form-group">
                                <input required data-table="Started employment at:" data-error="Please enter a date." name="employment-date-from" type="text" class="multisteps-form__input form-control" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" placeholder="Started Employment at:">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-2 col-sm-2 mt-4 mt-sm-0 arrow-container" style="width:10%;">
                                <!-- <i class="zmdi zmdi-calendar-alt"></i> -->
                                <i class="fas fa-arrow-right"></i>
                              </div>
                              <div class="col-5 col-sm-5 mt-4 mt-sm-0 form-group">
                                <input required data-table="Ended employment at:" data-error="Please enter a date" name="employment-date-to" type="text" class="multisteps-form__input form-control" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" placeholder="Ended Employment at:">
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col">
                            <h5 class="card-title">Supervisor Name:</h5>
                            <div class="form-row mt-4">
                              <div class="col-lg-6 col-sm-12 form-group">
                                <input required data-table="Supervisor first name" data-error="Please enter First name." name="supervisor-first-name" type="text" class="multisteps-form__input form-control" placeholder="Supervisor First name">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <input required data-table="Supervisor last name" data-error="Please enter Last name." name="supervisor-last-name" type="text" class="multisteps-form__input form-control" placeholder="Supervisosr Last name">
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                            <div class="form-row mt-4">
                              <div class="col form-group">
                                <input required data-table="Supervisor title" data-error="Please enter Supervisor title." name="supervisor-title" type="text" class="multisteps-form__input form-control" placeholder="Supervisor Title">
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a class="rem-rental-history"  onclick="this.parentNode.parentNode.removeChild(this.parentNode);">x Remove Employment Entry</a>
                      </div>`;

$("#add_entry").click(function() {
  $("#writeroot").append(readrootText);
  disableState();
})

$("#add_entry_2").click(function(){
  $("#writeroot2").append(readrootText_2);
})

function addEntryToList() {
  var countryList=$(".country")
  return countryList;
}
function disableState() {
  var countryList = addEntryToList();
  countryList.each(function(){
    var country = $(this);
    var state = country.parent().next().children();
    country.change(function(){
      if(!(country.val() === "United States")){
        console.log("not US");
        state.prop("disabled",true)
        state.prop("required", false);
        state.parent().removeClass("has-error has-danger");
        state.next().hide();
        state.val('');
      }
      else{
        console.log("is US");
        state.prop("disabled", false);
        state.prop("required", true);
        state.next().show();

      }

    })
  })

}
disableState();

// var stateList = $(".state");
