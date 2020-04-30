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

var readrootText = `                            <div class="readrootContainer">

  <h4 class="multisteps-form__title">Rental History</h4>
  <div class="form-row mt-4">
    <div class="col">
      <h5 class="card-title">Rental Address:</h5>
      <div class="form-row mt-4">
        <div class="col-lg-6 col-sm-12 form-group">
          <select required data-error="Please enter Country."  placeholder="Rental Country" name="rental-history-country" type="text" class="multisteps-form__input form-control country" >
            <option value="" disabled selected >Country</option>
            <option value="Afganistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire">Bonaire</option>
            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Canary Islands">Canary Islands</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Channel Islands">Channel Islands</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos Island">Cocos Island</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote DIvoire">Cote DIvoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Curaco">Curacao</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands">Falkland Islands</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Ter">French Southern Ter</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Great Britain">Great Britain</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="Indonesia">Indonesia</option>
            <option value="India">India</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea North">Korea North</option>
            <option value="Korea Sout">Korea South</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Malawi">Malawi</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Midway Islands">Midway Islands</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Nambia">Nambia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherland Antilles">Netherland Antilles</option>
            <option value="Netherlands">Netherlands (Holland, Europe)</option>
            <option value="Nevis">Nevis</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau Island">Palau Island</option>
            <option value="Palestine">Palestine</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Phillipines">Philippines</option>
            <option value="Pitcairn Island">Pitcairn Island</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Republic of Montenegro">Republic of Montenegro</option>
            <option value="Republic of Serbia">Republic of Serbia</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="St Barthelemy">St Barthelemy</option>
            <option value="St Eustatius">St Eustatius</option>
            <option value="St Helena">St Helena</option>
            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
            <option value="St Lucia">St Lucia</option>
            <option value="St Maarten">St Maarten</option>
            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
            <option value="Saipan">Saipan</option>
            <option value="Samoa">Samoa</option>
            <option value="Samoa American">Samoa American</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Tahiti">Tahiti</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Erimates">United Arab Emirates</option>
            <option value="United States">United States</option>
            <option value="Uraguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City State">Vatican City State</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
            <option value="Wake Island">Wake Island</option>
            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
            <option value="Yemen">Yemen</option>
            <option value="Zaire">Zaire</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <select required data-error="Please choose an answer." placeholder="Rental State" name="rental-history-state" class="multisteps-form__select form-control state">
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
          <input required data-error="Please enter City"  placeholder="Rental City" name="rental-history-city" type="text" class="multisteps-form__input form-control">
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <input required data-error="Please enter Street."  placeholder="Rental Street" name="rental-history-street"  type="text" class="form-control textarea-form">
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <input required data-error="Please enter Zip." placeholder="Rental Zip" name="rental-history-zip" type="text" class="multisteps-form__input form-control">
          <div class="help-block with-errors"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col-lg-6 col-sm-12 form-group">
      <input required data-error="Please enter Rental dates." name="rental-history-date" type="text" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" class="multisteps-form__input form-control" placeholder="Rental Dates">
      <div class="help-block with-errors"></div>
    </div>
    <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
      <input required data-error="Please enter Monthly Rent."  placeholder="Monthly Rent" name="rental-history-monthly-rent" type="text" class="multisteps-form__input form-control" placeholder="Monthly Rent">
      <div class="help-block with-errors"></div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col form-group">
      <input required data-error="Please enter Reason for leaving." name="reason-for-leaving" type="text" class="multisteps-form__input form-control" placeholder="Reason For leaving">
      <div class="help-block with-errors"></div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col">
      <h5 class="card-title">Landlord Information:</h5>
      <div class="form-row mt-4">
        <div class="col-lg-6 col-sm-12 form-group">
          <input required data-error="Please enter First Name." name="landlord-first-name" type="text" class="multisteps-form__input form-control" placeholder="Landlord First Name">
          <div class="help-block with-errors"></div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
          <input required data-error="Please enter Last Name." name="landlord-last-name" type="text" class="multisteps-form__input form-control" placeholder="Landlord Last Name">
          <div class="help-block with-errors"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row mt-4">
    <div class="col-lg-6 col-sm-12 form-group">
      <input required data-error="Please enter Phone number." name="landlord-phone" type="text" class="multisteps-form__input form-control" placeholder="Landlord Phone Number">
      <div class="help-block with-errors"></div>
    </div>
    <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
      <input required data-error="Please enter Email address." name="landlord-email" type="email" class="multisteps-form__input form-control" placeholder="Landlord Email address">
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
                                <input required data-error="Please enter Name." name="employer-name" type="text" class="multisteps-form__input form-control" placeholder="Employer Name">
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                            <div class="form-row mt-4">
                              <div class="col-lg-6 col-sm-12 form-group">
                                <input required data-error="Please enter Phone number." name="employer-phone" type="text" class="multisteps-form__input form-control" placeholder="Employer Phone number">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <input name="employer-email" type="text" class="multisteps-form__input form-control" placeholder="Employer Email Address(optional)">
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
                                <select name="employer-country" type="text" class="multisteps-form__input form-control country" placeholder="Employer Country">
                                  <option value="" disabled selected >Country</option>
                                  <option value="Afganistan">Afghanistan</option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">American Samoa</option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Anguilla">Anguilla</option>
                                  <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Aruba">Aruba</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bermuda">Bermuda</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Bonaire">Bonaire</option>
                                  <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                  <option value="Brunei">Brunei</option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina Faso">Burkina Faso</option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Canary Islands">Canary Islands</option>
                                  <option value="Cape Verde">Cape Verde</option>
                                  <option value="Cayman Islands">Cayman Islands</option>
                                  <option value="Central African Republic">Central African Republic</option>
                                  <option value="Chad">Chad</option>
                                  <option value="Channel Islands">Channel Islands</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Christmas Island">Christmas Island</option>
                                  <option value="Cocos Island">Cocos Island</option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Congo">Congo</option>
                                  <option value="Cook Islands">Cook Islands</option>
                                  <option value="Costa Rica">Costa Rica</option>
                                  <option value="Cote DIvoire">Cote DIvoire</option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Curaco">Curacao</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czech Republic">Czech Republic</option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">Dominican Republic</option>
                                  <option value="East Timor">East Timor</option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">El Salvador</option>
                                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands">Falkland Islands</option>
                                  <option value="Faroe Islands">Faroe Islands</option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="French Guiana">French Guiana</option>
                                  <option value="French Polynesia">French Polynesia</option>
                                  <option value="French Southern Ter">French Southern Ter</option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Gambia">Gambia</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Gibraltar">Gibraltar</option>
                                  <option value="Great Britain">Great Britain</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Greenland">Greenland</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guadeloupe">Guadeloupe</option>
                                  <option value="Guam">Guam</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Hawaii">Hawaii</option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="India">India</option>
                                  <option value="Iran">Iran</option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Isle of Man">Isle of Man</option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kiribati">Kiribati</option>
                                  <option value="Korea North">Korea North</option>
                                  <option value="Korea Sout">Korea South</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Laos">Laos</option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libya">Libya</option>
                                  <option value="Liechtenstein">Liechtenstein</option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macau">Macau</option>
                                  <option value="Macedonia">Macedonia</option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Marshall Islands">Marshall Islands</option>
                                  <option value="Martinique">Martinique</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mayotte">Mayotte</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Midway Islands">Midway Islands</option>
                                  <option value="Moldova">Moldova</option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montserrat">Montserrat</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar</option>
                                  <option value="Nambia">Nambia</option>
                                  <option value="Nauru">Nauru</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherland Antilles">Netherland Antilles</option>
                                  <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                  <option value="Nevis">Nevis</option>
                                  <option value="New Caledonia">New Caledonia</option>
                                  <option value="New Zealand">New Zealand</option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="Niue">Niue</option>
                                  <option value="Norfolk Island">Norfolk Island</option>
                                  <option value="Norway">Norway</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau Island">Palau Island</option>
                                  <option value="Palestine">Palestine</option>
                                  <option value="Panama">Panama</option>
                                  <option value="Papua New Guinea">Papua New Guinea</option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Phillipines">Philippines</option>
                                  <option value="Pitcairn Island">Pitcairn Island</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Puerto Rico">Puerto Rico</option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Republic of Montenegro">Republic of Montenegro</option>
                                  <option value="Republic of Serbia">Republic of Serbia</option>
                                  <option value="Reunion">Reunion</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russia">Russia</option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="St Barthelemy">St Barthelemy</option>
                                  <option value="St Eustatius">St Eustatius</option>
                                  <option value="St Helena">St Helena</option>
                                  <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                  <option value="St Lucia">St Lucia</option>
                                  <option value="St Maarten">St Maarten</option>
                                  <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                  <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                  <option value="Saipan">Saipan</option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="Samoa American">Samoa American</option>
                                  <option value="San Marino">San Marino</option>
                                  <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                  <option value="Saudi Arabia">Saudi Arabia</option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra Leone">Sierra Leone</option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Solomon Islands">Solomon Islands</option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South Africa">South Africa</option>
                                  <option value="Spain">Spain</option>
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Swaziland">Swaziland</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Switzerland">Switzerland</option>
                                  <option value="Syria">Syria</option>
                                  <option value="Tahiti">Tahiti</option>
                                  <option value="Taiwan">Taiwan</option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania">Tanzania</option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tokelau">Tokelau</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Turkmenistan">Turkmenistan</option>
                                  <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                  <option value="Tuvalu">Tuvalu</option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="United Kingdom">United Kingdom</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="United Arab Erimates">United Arab Emirates</option>
                                  <option value="United States">United States</option>
                                  <option value="Uraguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Vatican City State">Vatican City State</option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Vietnam">Vietnam</option>
                                  <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                  <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                  <option value="Wake Island">Wake Island</option>
                                  <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zaire">Zaire</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <select name="employer-state" placeholder="Employer State" class="multisteps-form__select form-control state">
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
                                <input name="employer-city"type="text" class="multisteps-form__input form-control" placeholder="Employer City">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <input name="employer-street"  type="text" class="form-control textarea-form" placeholder="Employer Street">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <input name="employer-zip" type="text" class="multisteps-form__input form-control" placeholder="Employer Zip">
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                            <br>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col-lg-6 col-sm-12 form-group">
                            <input required data-error="Please enter your Position." name="position-held" type="text" class="multisteps-form__input form-control" placeholder="Your Position">
                            <div class="help-block with-errors"></div>
                          </div>
                          <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                            <input required data-error="Please enter your Monthly gross salary." name="monthly-gross-salary" type="text" class="multisteps-form__input form-control" placeholder="Monthly Gross Salary">
                            <div class="help-block with-errors"></div>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col">
                            <h5 class="card-title">Employment Dates:</h5>
                            <div class="form-row mt-4 date-from-to-row">
                              <div class="col-5 col-sm-5 mt-4 mt-sm-0 form-group">
                                <input required data-error="Please enter a date." name="employment-date-from" type="text" class="multisteps-form__input form-control" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" placeholder="Started Employment at:">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-2 col-sm-2 mt-4 mt-sm-0 arrow-container" style="width:10%;">
                                <!-- <i class="zmdi zmdi-calendar-alt"></i> -->
                                <i class="fas fa-arrow-right"></i>
                              </div>
                              <div class="col-5 col-sm-5 mt-4 mt-sm-0 form-group">
                                <input required data-error="Please enter a date" name="employment-date-to" type="text" class="multisteps-form__input form-control" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}" placeholder="Ended Employment at:">
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
                                <input required data-error="Please enter First name." name="supervisor-first-name" type="text" class="multisteps-form__input form-control" placeholder="Supervisor First name">
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-lg-6 col-sm-12 mt-4 mt-sm-0 form-group">
                                <input required data-error="Please enter Last name." name="supervisor-last-name" type="text" class="multisteps-form__input form-control" placeholder="Supervisosr Last name">
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                            <div class="form-row mt-4">
                              <div class="col form-group">
                                <input required data-error="Please enter Supervisor title." name="supervisor-title" type="text" class="multisteps-form__input form-control" placeholder="Supervisor Title">
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
