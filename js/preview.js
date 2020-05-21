
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


var index1 = 0;
var index2 = 0;
function generateId() {
  var id = index1++;
  return id;
}
function generateFor() {
  var id = index2++;
  return id;
}

var readrootText = `
<div class="readrootContainer">
  <h4 class="multisteps-form__title">Rental History</h4>
  <div class="form-row mt-4">
    <div class="col">
      <h5 class="card-title">Rental Address:</h5>
      <div class="form-row mt-4">
        <div class="col-lg-6 col-sm-12 form-group">
          <input disabled required data-table="Rental country" data-error="Please enter Country."  placeholder="Country" name="rental-history-country" type="text" value="United States" class="multisteps-form__input form-control country" ></input>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12   form-group">
          <select id="rental-state`+generateId()+`" required data-table="Rental state" data-error="Please choose an answer." placeholder="State" name="rental-history-state-a" class="multisteps-form__select form-control state">
            <option value="" disabled selected ></option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arizona">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District Of Columbia">District Of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
          <label for="rental-state`+generateFor()+`">State</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12   form-group">
          <input id="rental-city`+generateId()+`" required data-table="Rental city" data-error="Please enter City"  placeholder="City" name="rental-history-city-a" type="text" class="multisteps-form__input form-control">
          <label for="rental-city`+generateFor()+`">City</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12   form-group">
          <input id="rental-zip`+generateId()+`" required data-table="Rental Zip Code" data-error="Please enter Zip Code" placeholder="Zip Code" name="rental-history-zip-a" type="number" class="multisteps-form__input form-control">
          <label for="rental-zip`+generateFor()+`">Zip Code</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12   form-group">
          <textarea id="rental-add-1`+generateId()+`" required data-table="Rental address 1" data-error="Please enter your address." name="rental-add-1-a" type="text" class="form-control textarea-form" placeholder="Address 1"></textarea>
          <label for="rental-add-1`+generateFor()+`">Address 1</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12   form-group">
          <textarea id="rental-add-2`+generateId()+`" required data-table="Rental address 2" data-error="Please enter your address." name="rental-add-2-a" type="text" class="form-control textarea-form" placeholder="Address 2"></textarea>
          <label for="rental-add-2`+generateFor()+`">Address 2</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 form-group">
          <input id="rental-date`+generateId()+`" required data-table="Rental date" data-error="Please enter Rental dates." name="rental-history-date-a" type="text" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" class="multisteps-form__input form-control" placeholder="Rental Dates">
          <label for="rental-date`+generateFor()+`">Rental Date</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12   form-group">
          <input id="monthly-rent`+generateId()+`" required data-table="Rental monthly rent" data-error="Please enter Monthly Rent."  placeholder="Monthly Rent" name="rental-history-monthly-rent-a" type="text" class="multisteps-form__input form-control" placeholder="Monthly Rent">
          <label for="monthly-rent`+generateFor()+`">Monthly rent</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-12 col-sm-12 form-group">
          <input id="reason-for-leaving`+generateId()+`" required data-table="Reason for leaving" data-error="Please enter Reason for leaving." name="reason-for-leaving-a" type="text" class="multisteps-form__input form-control" placeholder="Reason For leaving">
          <label for="reason-for-leaving`+generateFor()+`">Reason for leaving</label>
          <div class="help-block with-errors"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col">
      <h5 class="card-title">Landlord Information:</h5>
      <div class="form-row mt-4">
        <div class="col-lg-6 col-sm-12 form-group">
          <input id="landlord-fname`+generateId()+`" required data-table="Landlord first name" data-error="Please enter First Name." name="landlord-first-name-a" type="text" class="multisteps-form__input form-control" placeholder="First Name">
          <label for="landlord-fname`+generateFor()+`">First Name</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12   form-group">
          <input id="landlord-lname`+generateId()+`" required data-table="Landlord last name" data-error="Please enter Last Name." name="landlord-last-name-a" type="text" class="multisteps-form__input form-control" placeholder="Last Name">
          <label for="landlord-lname`+generateFor()+`">Last name</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 form-group">
          <input id="landlord-phone-number`+generateId()+`" required data-table="Landlord Mobile/Phone num." data-error="Please enter Phone number." name="landlord-phone-a" type="text" class="multisteps-form__input form-control" placeholder="Mobile/Phone Number">
          <label for="landlord-phone-number`+generateFor()+`">Mobile/Phone number</label>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12   form-group">
          <input id="landlord-email`+generateId()+`" required data-table="Landlord email address" data-error="Please enter Email address." name="landlord-email-a" type="email" class="multisteps-form__input form-control" placeholder="Email address">
          <label for="landlord-email`+generateFor()+`">Email</label>
          <div class="help-block with-errors"></div>
        </div>
      </div>
    </div>
  </div>
  <a class="rem-rental-history" id="remBtn" onclick="this.parentNode.parentNode.removeChild(this.parentNode); window.scrollTo({ top: 20, behavior: 'smooth' }); ">x Remove Rental History Entry</a>
  <div class="form-row mt-4">
  </div>
</div>`;

var readrootText_2 = `<div class="readrootContainer">
                        <h4 class="multisteps-form__title">Employment</h4>
                        <div class="form-row mt-4">
                          <div class="col-lg-12 col-sm-12">
                            <h5 class="card-title">Employer Information:</h5>
                            <div class="form-row mt-4">
                              <div class="col-lg-12 col-sm-12 form-group">
                                <input id="employer-name`+generateId()+`" required data-table="Employer name" data-error="Please enter Name." name="employer-name-a" type="text" class="multisteps-form__input form-control" placeholder="Employer Name">
                                <label for="employer-name`+generateFor()+`">Employer name</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 form-group">
                                <input id="employer-phone`+generateId()+`" required data-table="Employer Mobile/Phone num." data-error="Please enter Phone number." name="employer-phone-a" type="text" class="multisteps-form__input form-control" placeholder="Mobile/Phone number">
                                <label for="employer-phone`+generateFor()+`">Mobile/Phone number</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12   form-group">
                                <input id="employer-email`+generateId()+`" required name="employer-email-a" data-table="Employer email" data-error="Please enter a valid email address" type="email" class="multisteps-form__input form-control" placeholder="Email Address(optional)">
                                <label for="employer-email`+generateFor()+`">Email</label>
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
                              <div class="col-lg-6 col-sm-12   form-group">
                                <select id="employer-state`+generateId()+`" data-table="Employer state" data-error="Please choose a state" name="employer-state-a" placeholder="State" class="multisteps-form__select form-control state">
                                  <option value="" disabled selected ></option>
                                  <option value="Alabama">Alabama</option>
                                  <option value="Alaska">Alaska</option>
                                  <option value="Arizona">Arizona</option>
                                  <option value="Arizona">Arkansas</option>
                                  <option value="California">California</option>
                                  <option value="Colorado">Colorado</option>
                                  <option value="Connecticut">Connecticut</option>
                                  <option value="Delaware">Delaware</option>
                                  <option value="District Of Columbia">District Of Columbia</option>
                                  <option value="Florida">Florida</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Hawaii">Hawaii</option>
                                  <option value="Idaho">Idaho</option>
                                  <option value="Illinois">Illinois</option>
                                  <option value="Indiana">Indiana</option>
                                  <option value="Iowa">Iowa</option>
                                  <option value="Kansas">Kansas</option>
                                  <option value="Kentucky">Kentucky</option>
                                  <option value="Louisiana">Louisiana</option>
                                  <option value="Maine">Maine</option>
                                  <option value="Maryland">Maryland</option>
                                  <option value="Massachusetts">Massachusetts</option>
                                  <option value="Michigan">Michigan</option>
                                  <option value="Minnesota">Minnesota</option>
                                  <option value="Mississippi">Mississippi</option>
                                  <option value="Missouri">Missouri</option>
                                  <option value="Montana">Montana</option>
                                  <option value="Nebraska">Nebraska</option>
                                  <option value="Nevada">Nevada</option>
                                  <option value="New Hampshire">New Hampshire</option>
                                  <option value="New Jersey">New Jersey</option>
                                  <option value="New Mexico">New Mexico</option>
                                  <option value="New York">New York</option>
                                  <option value="North Carolina">North Carolina</option>
                                  <option value="North Dakota">North Dakota</option>
                                  <option value="Ohio">Ohio</option>
                                  <option value="Oklahoma">Oklahoma</option>
                                  <option value="Oregon">Oregon</option>
                                  <option value="Pennsylvania">Pennsylvania</option>
                                  <option value="Rhode Island">Rhode Island</option>
                                  <option value="South Carolina">South Carolina</option>
                                  <option value="South Dakota">South Dakota</option>
                                  <option value="Tennessee">Tennessee</option>
                                  <option value="Texas">Texas</option>
                                  <option value="Utah">Utah</option>
                                  <option value="Vermont">Vermont</option>
                                  <option value="Virginia">Virginia</option>
                                  <option value="Washington">Washington</option>
                                  <option value="West Virginia">West Virginia</option>
                                  <option value="Wisconsin">Wisconsin</option>
                                  <option value="Wyoming">Wyoming</option>
                                </select>
                                <label for="employer-state`+generateFor()+`">State</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12   form-group">
                                <input id="employer-city`+generateId()+`" data-table="Employer city" data-error="Please enter a city" name="employer-city-a"type="text" class="multisteps-form__input form-control" placeholder="City">
                                <label for="employer-city`+generateFor()+`">City</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12   form-group">
                                <input id="employer-zip`+generateId()+`" data-table="Employer Zip Code" data-error="Please enter Zip Code" name="employer-zip-a" type="number" class="multisteps-form__input form-control" placeholder="Zip Code">
                                <label for="employer-zip`+generateFor()+`">Zip Code</label>
                                <div class="help-block with-errors"></div>
                              </div>

                              <div class="col-lg-6 col-sm-12   form-group">
                                <textarea id="employer-add-1`+generateId()+`"  data-table="Employer address 1" data-error="Please enter your address." name="employer-add-1-a" type="text" class="form-control textarea-form" placeholder="Address 1"></textarea>
                                <label for="employer-add-1`+generateFor()+`">Address 1</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12   form-group">
                                <textarea id="employer-add-2`+generateId()+`"  data-table="Employer address 2" data-error="Please enter your address." name="employer-add-2-a" type="text" class="form-control textarea-form" placeholder="Address 2"></textarea>
                                <label for="employer-add-2`+generateFor()+`">Address 2</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 form-group">
                                <input id="your-position`+generateId()+`" required data-table="Your position" data-error="Please enter your Position." name="position-held-a" type="text" class="multisteps-form__input form-control" placeholder="Your Position">
                                <label for="your-position`+generateFor()+`">Your Position</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 form-group">
                                <input id="gross-salary`+generateId()+`" required data-table="Monthly gross salary" data-error="Please enter your Monthly gross salary." name="monthly-gross-salary-a" type="text" class="multisteps-form__input form-control" placeholder="Monthly Gross Salary">
                                <label for="gross-salary`+generateFor()+`">Monthly gross salary</label>
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col">
                            <h5 class="card-title">Employment Dates:</h5>
                            <div class="form-row mt-4 date-from-to-row">
                              <div class="col-5 col-sm-5 mt-4 mt-sm-0 form-group">
                                <input id="employment-date-from`+generateId()+`" required data-table="Started:" data-error="Please enter a date." name="employment-date-from-a" type="text" class="multisteps-form__input form-control" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" placeholder="Started Employment at:">
                                <label for="employment-date-from`+generateFor()+`">Started</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-2 col-sm-2 mt-4 mt-sm-0 arrow-container" style="width:10%;">
                                <!-- <i class="zmdi zmdi-calendar-alt"></i> -->
                                <i class="fas fa-arrow-right"></i>
                              </div>
                              <div class="col-5 col-sm-5 mt-4 mt-sm-0 form-group">
                                <input id="employment-date-to`+generateId()+`" required data-table="Ended:" data-error="Please enter a date" name="employment-date-to-a" type="text" class="multisteps-form__input form-control" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" placeholder="Ended Employment at:">
                                <label for="employment-date-to`+generateFor()+`">Ended</label>
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
                                <input id="supervisor-fname`+generateId()+`" required data-table="Supervisor first name" data-error="Please enter First name." name="supervisor-first-name-a" type="text" class="multisteps-form__input form-control" placeholder="First name">
                                <label for="supervisor-fname`+generateFor()+`">First name</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12   form-group">
                                <input id="supervisor-lname`+generateId()+`" required data-table="Supervisor last name" data-error="Please enter Last name." name="supervisor-last-name-a" type="text" class="multisteps-form__input form-control" placeholder="Last name">
                                <label for="supervisor-lname`+generateFor()+`">Last name</label>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-12 col-sm-12 form-group">
                                <input id="supervisor-title`+generateId()+`" required data-table="Supervisor title" data-error="Please enter Supervisor title." name="supervisor-title-a" type="text" class="multisteps-form__input form-control" placeholder="Supervisor Title">
                                <label for="supervisor-title`+generateFor()+`">Supervisor title</label>
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a class="rem-rental-history"  onclick="this.parentNode.parentNode.removeChild(this.parentNode); window.scrollTo({ top: 20, behavior: 'smooth' });">x Remove Employment Entry</a>
                        <br>
                      </div>`;

$("#add_entry").click(function() {
  $("#writeroot").append(readrootText);
  $("form").validator('update');
  handleLabels();
  handleValLabel();
})

$("#add_entry_2").click(function(){
  $("#writeroot2").append(readrootText_2);
  $("form").validator('update');
  handleLabels();
  handleValLabel();
})

$("#remBtn").click(function() {
  $('form').validator('update');
})
