
// function to call the validation when clicking submit
$("#myForm").validator().on("submit", function(event) {
  if (event.isDefaultPrevented()) {
        console.log("error");
        // submitFailed();
    } else {
        event.preventDefault();
        setInputDate("#submitDate");
        csubmitForm();
        submitSuccess();
        // console.log("Success");
    }
});

//if submission successfull
function submitSuccess() {
  setActiveStep(6);
  setActivePanel(6);
  window.scroll(0, 0);
  $("#steps_slider").remove();
  $("#title_text").remove();


}

function submitFailed() {
  $(".failed").show();
}

// function to submit to the spreadsheet
function csubmitForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz7Pd9hLTvHmCFwWI31U6_jKtLlJsN7pfKB_H8sTYzZDB1Wk1Y/exec'
  const form = document.forms['rental-app-form']
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // .then(response => console.log('Success!', response))
    .then(response => submitSuccess())

    .catch(error => console.error('Error!', error.message))
}

//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next' };

  const getCurrentPanel = () => {
    var currentPanel = $(".js-active");
    return currentPanel;
  };

function toggleHasError() {
  var curStep = getActivePanel(),
      // curStepBtn = curStep.attr("id"),
      // nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
      curInputs = curStep.find("input[type='text'],input[type='url']"),
      isValid = true;

  $(".form-group").removeClass("has-error");
  for(var i=0; i<curInputs.length; i++){
      if (!curInputs[i].validity.valid){
          isValid = false;
          $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
  }

  if (isValid)
      nextStepWizard.removeAttr('disabled').trigger('click');
}

function checkCustomInvalid(){
  return getCurrentPanel().find('.is-invalid').length == 1;
}


function checkRequired() {
  let allAreFilled = true;
  var activePanel= getActivePanel();
  activePanel.querySelectorAll("[required]").forEach(function(i) {
    if (!allAreFilled) return;
    if (!i.value) allAreFilled = false;
    if (i.type === "radio") {
      let radioValueCheck = false;
      activePanel.querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
        if (r.checked) radioValueCheck = true;
      })
      allAreFilled = radioValueCheck;
    }
  })
  if (!allAreFilled) {
    // console.log("Check required fields");
    return false;
  }
}

//remove class from a set of items
const removeClasses = (elemSet, className) => {

  elemSet.forEach(elem => {

    elem.classList.remove(className);

  });

};

//return exect parent node of the element
const findParent = (elem, parentClass) => {

  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;

};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {

  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');

  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {

    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }

  });
};

//get active panel
const getActivePanel = () => {

  let activePanel;

  DOMstrings.stepFormPanels.forEach(elem => {

    if (elem.classList.contains('js-active')) {

      activePanel = elem;

    }

  });

  return activePanel;

};


//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {

  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');

  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {

      elem.classList.add('js-active');

      setFormHeight(elem);

    }
  });

};

//set form height equal to current panel height
const formHeight = activePanel => {

  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
};

//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {

  //check if click target is a step button
  const eventTarget = e.target;

  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }

  //get active button step number
  const activeStep = getActiveStep(eventTarget);

  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);

  //open active panel
  setActivePanel(activeStep);
});

var errorElements = [];
//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {

  const eventTarget = e.target;

  //check if we clicked on `PREV` or NEXT` buttons
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
  {
    return;
  }



  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

  //set active step and active panel onclick
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    // console.log("Click Prev");
    $("form").validator('reset');
    activePanelNum--;
    window.scroll(0, 265);

  } else {
    checkRequired();
    // console.log("Click Next");
    if(($("div").hasClass("has-error"))==true || checkRequired()== false  || checkCustomInvalid()==true){
      // validating the fields manually without using the validator library
      if(checkCustomInvalid()==true){
          errorElements= [];
          // errorElements.push($("form").find($(".has-error")));
          errorElements.push($("form").find($(".is-invalid")));
          $('html, body').animate({
            scrollTop: $(errorElements[0]).offset().top -  50+ "px"
          }, "fast");
      }
      // else {

        $(".nextBtn").prop('disabled',false)
        // console.log("Check invalid fields");
        var currentPanel =getCurrentPanel();
        currentPanel.validator('update');
        currentPanel.validator('validate');
      // }
      // activePanel.validator('validate');

      // .validator('validate');
    }
    else {
      // console.log("Click next");
      activePanelNum++;
      window.scroll(0, 265);

    }


  }

  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);

});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

const setAnimationType = newType => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  });
};

// fields that appear if user choose yes
var carFields = `
  <div class="col-lg-6 col-sm-12 car-div form-group" >
    <input required id="car-make" data-table="Car Make" data-error="Please fill out this field." name="car-make" type="text" class="car-field multisteps-form__input form-control" placeholder="Car Make">
    <label for="car-make">Car Make</label>
    <div class="help-block with-errors"></div>
  </div>
  <div class="col-lg-6 col-sm-12 car-div form-group" >
    <input  required id="car-model" data-table="Car Model" data-error="Please fill out this field." name="car-model" type="text" class="car-field multisteps-form__input form-control" placeholder="Car Model">
    <label for="car-model">Car Model</label>
    <div class="help-block with-errors"></div>
  </div>
  <div class="col-lg-6 col-sm-12 car-div form-group" >
    <input  required id="license-plate" data-table="Car license plate number"  data-error="Please fill out this field." name="license-plate-num" type="text" class="car-field multisteps-form__input form-control" placeholder="Car License Plate Number">
    <label for="license-plate">Car license plate number</label>
    <div class="help-block with-errors"></div>
  </div>
  <div class="col-lg-6 col-sm-12 car-div form-group" >
    <input  required id="driver-license" data-table="Drivers license number" data-error="Please fill out this field." name="driver-license-num" type="text" class="car-field multisteps-form__input form-control" placeholder="Drivers License Number">
    <label for="driver-license">Drivers license number</label>
    <div class="help-block with-errors"></div>
  </div>


`

function toggleFields() {
  const x = $(".car-div");
  if (!($("#car-select").val() === "Yes")){
    $("#ifYesCar").slideUp();
    $(".car-div").detach();
    var currentPanel =getCurrentPanel();
    currentPanel.validator('update');
    $(".car-field").attr("required",false);
    $(".car-field").parent().removeClass("has-danger");
    $(".car-field").parent().removeClass("has-error");

  }

  else{
    // $("#car_fields").next(carFields);
    // $(carFields).insertAfter($("#car_fields"));
    $("#ifYesCar").append(carFields);
    $("#ifYesCar").slideDown();
    var currentPanel =getCurrentPanel();
    currentPanel.validator('update');
    $(".car-field").attr("required",true);
  }
}

 $("#car-select").change(function () {
    toggleFields();
    handleLabels();
    handleValLabel();
});

// other input field that appears if user choose other
var otherAppend = `
<div class="form-row mt-4 other-div" style="display: none;">
  <div class="col-lg-12 col-sm-12 form-group">
    <input id="Other" name="other-reasons" data-table="Other" data-error="Please fill out this field." name="other-reason" type="text" class="other-field multisteps-form__input form-control" placeholder="Other">
    <label for="Other">Other</label>
    <div class="help-block with-errors"></div>
  </div>
</div>
`
// fields that appear if user choose yes
var ifYesAppend = `
<div class="col form-group ifyes-div">
  <select required id="note-reason"  data-table="Reason for choosing yes?" data-error="Please note the reason." type="text" class="multisteps-form__input form-control" name="why-don't-both-parents-sign" placeholder="Reason for choosing yes">
    <option value="" disabled selected hidden></option>
    <option value="Passed away">Passed away</option>
    <option value="Have no contact">Have no contact</option>
    <option value="Financially independent">Financially independent</option>
    <option value="Other">Other</option>
  </select>
  <label for="note-reason">If yes, please note reason:</label>
  <div class="help-block with-errors"></div>
  <div id="otherAppend" class="otherAppend">

  </div>
</div>
`

function toggleOther() {
  const x =$(".other-div");
  if (!($("#note-reason").val()=== "Other")) {
    $(".other-div").slideUp();
    $(".other-div").detach();
    $("#Other").attr("required",false);
  }
  else {
    $("#otherAppend").append(otherAppend);
    var currentPanel =getCurrentPanel();
    currentPanel.validator('update');
    $(".other-div").slideDown();
    $("#Other").attr("required",true);
  }
}

toggleOther();


function noteReasonChange() {
  $("#note-reason").change(function () {
    toggleOther();
    handleLabels();
    handleValLabel();
  });
}

function unrequireParents() {
  $("#step-2").find("input, select.state, textarea").each(function(){
    var elm = $(this);
    elm.attr('required', false);
  })
  $('#step-2').validator('reset');

}

function requireParents() {
  $("#step-2").find("input, select.state, textarea").each(function(){
    var elm = $(this);
    elm.attr('required', true);
  })
}

var yesAppendArr = [] ;

$('#yesCheck').click(function() {

    if (yesAppendArr.length == 0) {

      yesAppendArr.push(ifYesAppend);
      $('#ifYesCheck').append(yesAppendArr);
      $('#ifYesCheck').slideDown();
      $("#note-reason").attr('required',true);
      $("form").validator('update');
      noteReasonChange();
      unrequireParents();
    }



});

$('#noCheck').click(function() {
    $('#ifYesCheck').slideUp();
    $('.ifyes-div').detach();
    $("#note-reason").attr("required",false);
    $("form").validator('update');
    requireParents();
});

// all chapters (local affiliations)
var chapters=`
<div class="chapter-content">
  <select id="loc-affiliations" required data-table="Local Affiliations" data-error="Please fill out this field." name="local-affiliations" type="text" class="multisteps-form__input form-control" placeholder="Local affiliations - faternity, sorority, etc.">
    <option value="" disabled selected hidden></option>
    <option value="Alpha Delta Phi (IFC)">Alpha Delta Phi (IFC)</option>
    <option value="Alpha Epsilon Pi (IFC)">Alpha Epsilon Pi (IFC)</option>
    <option value="Alpha Phi Alpha Fraternity, Inc. (NPHC)">Alpha Phi Alpha Fraternity, Inc. (NPHC)</option>
    <option value="Alpha Sigma Phi (IFC)">Alpha Sigma Phi (IFC)</option>
    <option value="Alpha Tau Omega (IFC)">Alpha Tau Omega (IFC)</option>
    <option value="Beta Theta Pi (IFC)">Beta Theta Pi (IFC)</option>
    <option value="Chi Phi (IFC)">Chi Phi (IFC)</option>
    <option value="Delta Sigma Phi (IFC)">Delta Sigma Phi (IFC)</option>
    <option value="Delta Upsilon (IFC)">Delta Upsilon (IFC)</option>
    <option value="Iota Nu Delta Fraternity, Inc. (MGC)">Iota Nu Delta Fraternity, Inc. (MGC)</option>
    <option value="Kappa Alpha Order (IFC)">Kappa Alpha Order (IFC)</option>
    <option value="Kappa Alpha Psi Fraternity, Inc. (NPHC)">Kappa Alpha Psi Fraternity, Inc. (NPHC)</option>
    <option value="Lambda Chi Alpha (IFC)">Lambda Chi Alpha (IFC)</option>
    <option value="Lambda Upsilon Lambda Fraternity, Inc. (MGC)">Lambda Upsilon Lambda Fraternity, Inc. (MGC)</option>
    <option value="Phi Delta Sigma Fraternity, Inc. (MGC)">Phi Delta Sigma Fraternity, Inc. (MGC)</option>
    <option value="Phi Delta Theta (IFC)">Phi Delta Theta (IFC)</option>
    <option value="Phi Kappa Psi (IFC)">Phi Kappa Psi (IFC)</option>
    <option value="Phi Kappa Tau (IFC)">Phi Kappa Tau (IFC)</option>
    <option value="Phi Sigma Kappa (IFC)">Phi Sigma Kappa (IFC)</option>
    <option value="Pi Kappa Alpha (IFC)">Pi Kappa Alpha (IFC)</option>
    <option value="Sigma Alpha Epsilon (IFC)">Sigma Alpha Epsilon (IFC)</option>
    <option value="Sigma Alpha Mu (IFC)">Sigma Alpha Mu (IFC)</option>
    <option value="Sigma Chi (IFC)">Sigma Chi (IFC)</option>
    <option value="Sigma Nu (IFC)">Sigma Nu (IFC)</option>
    <option value="Sigma Phi Epsilon (IFC)">Sigma Phi Epsilon (IFC)</option>
    <option value="Tau Epsilon Phi (IFC)">Tau Epsilon Phi (IFC)</option>
    <option value="Theta Chi (IFC)">Theta Chi (IFC)</option>
    <option value="Zeta Beta Tau (IFC)">Zeta Beta Tau (IFC)</option>
    <option value="Zeta Psi (IFC)">Zeta Psi (IFC)</option>
    <option value="Alpha Chi Omega (PHA)">Alpha Chi Omega (PHA)</option>
    <option value="Alpha Delta Pi (PHA)">Alpha Delta Pi (PHA)</option>
    <option value="Alpha Epsilon Phi (PHA)">Alpha Epsilon Phi (PHA)</option>
    <option value="Alpha Kappa Alpha Sorority, Inc. (NPHC)">Alpha Kappa Alpha Sorority, Inc. (NPHC)</option>
    <option value="Alpha Omicron Pi (PHA)">Alpha Omicron Pi (PHA)</option>
    <option value="Alpha Phi (PHA)">Alpha Phi (PHA)</option>
    <option value="Alpha Xi Delta (PHA)">Alpha Xi Delta (PHA)</option>
    <option value="Delta Delta Delta (PHA)">Delta Delta Delta (PHA)</option>
    <option value="Delta Gamma (PHA)">Delta Gamma (PHA)</option>
    <option value="Delta Phi Epsilon (PHA)">Delta Phi Epsilon (PHA)</option>
    <option value="Delta Sigma Theta Sorority, Inc. (NPHC)">Delta Sigma Theta Sorority, Inc. (NPHC)</option>
    <option value="Gamma Phi Beta (PHA)">Gamma Phi Beta (PHA)</option>
    <option value="Hermandad de Sigma Iota Alpha, Inc. (MGC)">Hermandad de Sigma Iota Alpha, Inc. (MGC)</option>
    <option value="Kappa Alpha Theta (PHA)">Kappa Alpha Theta (PHA)</option>
    <option value="Kappa Delta (PHA)">Kappa Delta (PHA)</option>
    <option value="Kappa Lambda Xi Multicultural Sorority, Inc. (MGC)">Kappa Lambda Xi Multicultural Sorority, Inc. (MGC)</option>
    <option value="Kappa Phi Lambda Sorority, Inc. (MGC)">Kappa Phi Lambda Sorority, Inc. (MGC)</option>
    <option value="Lambda Theta Alpha Latin Sorority, Inc. (MGC)">Lambda Theta Alpha Latin Sorority, Inc. (MGC)</option>
    <option value="Phi Sigma Sigma (PHA)">Phi Sigma Sigma (PHA)</option>
    <option value="Sigma Delta Tau (PHA)">Sigma Delta Tau (PHA)</option>
    <option value="Sigma Kappa (PHA)">Sigma Kappa (PHA)</option>
    <option value="Sigma Psi Zeta Sorority, Inc. (MGC)">Sigma Psi Zeta Sorority, Inc. (MGC)</option>
    <option value="Zeta Tau Alpha (PHA)">Zeta Tau Alpha (PHA)</option>
    <option value="alpha Kappa Delta Phi Sorority, Inc. (MGC)">alpha Kappa Delta Phi Sorority, Inc. (MGC)</option>
    <option value="N/A">N/A</option>
  </select>
  <label for="loc-affiliations">Chapters</label>
  <div class="help-block with-errors"></div>
</div>
`

// chapters for male applicant only
var faternity = `
<div class="chapter-content">
  <select id="loc-affiliations" required data-table="Local Affiliations" data-error="Please fill out this field." name="local-affiliations" type="text" class="multisteps-form__input form-control" placeholder="Local affiliations - faternity, sorority, etc.">
    <option value="" disabled selected hidden></option>
    <option value="Alpha Delta Phi (IFC)">Alpha Delta Phi (IFC)</option>
    <option value="Alpha Epsilon Pi (IFC)">Alpha Epsilon Pi (IFC)</option>
    <option value="Alpha Phi Alpha Fraternity, Inc. (NPHC)">Alpha Phi Alpha Fraternity, Inc. (NPHC)</option>
    <option value="Alpha Sigma Phi (IFC)">Alpha Sigma Phi (IFC)</option>
    <option value="Alpha Tau Omega (IFC)">Alpha Tau Omega (IFC)</option>
    <option value="Beta Theta Pi (IFC)">Beta Theta Pi (IFC)</option>
    <option value="Chi Phi (IFC)">Chi Phi (IFC)</option>
    <option value="Delta Sigma Phi (IFC)">Delta Sigma Phi (IFC)</option>
    <option value="Delta Upsilon (IFC)">Delta Upsilon (IFC)</option>
    <option value="Iota Nu Delta Fraternity, Inc. (MGC)">Iota Nu Delta Fraternity, Inc. (MGC)</option>
    <option value="Kappa Alpha Order (IFC)">Kappa Alpha Order (IFC)</option>
    <option value="Kappa Alpha Psi Fraternity, Inc. (NPHC)">Kappa Alpha Psi Fraternity, Inc. (NPHC)</option>
    <option value="Lambda Chi Alpha (IFC)">Lambda Chi Alpha (IFC)</option>
    <option value="Lambda Upsilon Lambda Fraternity, Inc. (MGC)">Lambda Upsilon Lambda Fraternity, Inc. (MGC)</option>
    <option value="Phi Delta Sigma Fraternity, Inc. (MGC)">Phi Delta Sigma Fraternity, Inc. (MGC)</option>
    <option value="Phi Delta Theta (IFC)">Phi Delta Theta (IFC)</option>
    <option value="Phi Kappa Psi (IFC)">Phi Kappa Psi (IFC)</option>
    <option value="Phi Kappa Tau (IFC)">Phi Kappa Tau (IFC)</option>
    <option value="Phi Sigma Kappa (IFC)">Phi Sigma Kappa (IFC)</option>
    <option value="Pi Kappa Alpha (IFC)">Pi Kappa Alpha (IFC)</option>
    <option value="Sigma Alpha Epsilon (IFC)">Sigma Alpha Epsilon (IFC)</option>
    <option value="Sigma Alpha Mu (IFC)">Sigma Alpha Mu (IFC)</option>
    <option value="Sigma Chi (IFC)">Sigma Chi (IFC)</option>
    <option value="Sigma Nu (IFC)">Sigma Nu (IFC)</option>
    <option value="Sigma Phi Epsilon (IFC)">Sigma Phi Epsilon (IFC)</option>
    <option value="Tau Epsilon Phi (IFC)">Tau Epsilon Phi (IFC)</option>
    <option value="Theta Chi (IFC)">Theta Chi (IFC)</option>
    <option value="Zeta Beta Tau (IFC)">Zeta Beta Tau (IFC)</option>
    <option value="Zeta Psi (IFC)">Zeta Psi (IFC)</option>
    <option value="N/A">N/A</option>
  </select>
  <label for="loc-affiliations">Chapters</label>
  <div class="help-block with-errors"></div>
</div>
`

// chapters for female applicants only
var sorority = `
<div class="chapter-content">
  <select id="loc-affiliations" required data-table="Local Affiliations" data-error="Please fill out this field." name="local-affiliations" type="text" class="multisteps-form__input form-control" placeholder="Local affiliations - faternity, sorority, etc.">
    <option value="" disabled selected hidden></option>
    <option value="Alpha Chi Omega (PHA)">Alpha Chi Omega (PHA)</option>
    <option value="Alpha Delta Pi (PHA)">Alpha Delta Pi (PHA)</option>
    <option value="Alpha Epsilon Phi (PHA)">Alpha Epsilon Phi (PHA)</option>
    <option value="Alpha Kappa Alpha Sorority, Inc. (NPHC)">Alpha Kappa Alpha Sorority, Inc. (NPHC)</option>
    <option value="Alpha Omicron Pi (PHA)">Alpha Omicron Pi (PHA)</option>
    <option value="Alpha Phi (PHA)">Alpha Phi (PHA)</option>
    <option value="Alpha Xi Delta (PHA)">Alpha Xi Delta (PHA)</option>
    <option value="Delta Delta Delta (PHA)">Delta Delta Delta (PHA)</option>
    <option value="Delta Gamma (PHA)">Delta Gamma (PHA)</option>
    <option value="Delta Phi Epsilon (PHA)">Delta Phi Epsilon (PHA)</option>
    <option value="Delta Sigma Theta Sorority, Inc. (NPHC)">Delta Sigma Theta Sorority, Inc. (NPHC)</option>
    <option value="Gamma Phi Beta (PHA)">Gamma Phi Beta (PHA)</option>
    <option value="Hermandad de Sigma Iota Alpha, Inc. (MGC)">Hermandad de Sigma Iota Alpha, Inc. (MGC)</option>
    <option value="Kappa Alpha Theta (PHA)">Kappa Alpha Theta (PHA)</option>
    <option value="Kappa Delta (PHA)">Kappa Delta (PHA)</option>
    <option value="Kappa Lambda Xi Multicultural Sorority, Inc. (MGC)">Kappa Lambda Xi Multicultural Sorority, Inc. (MGC)</option>
    <option value="Kappa Phi Lambda Sorority, Inc. (MGC)">Kappa Phi Lambda Sorority, Inc. (MGC)</option>
    <option value="Lambda Theta Alpha Latin Sorority, Inc. (MGC)">Lambda Theta Alpha Latin Sorority, Inc. (MGC)</option>
    <option value="Phi Sigma Sigma (PHA)">Phi Sigma Sigma (PHA)</option>
    <option value="Sigma Delta Tau (PHA)">Sigma Delta Tau (PHA)</option>
    <option value="Sigma Kappa (PHA)">Sigma Kappa (PHA)</option>
    <option value="Sigma Psi Zeta Sorority, Inc. (MGC)">Sigma Psi Zeta Sorority, Inc. (MGC)</option>
    <option value="Zeta Tau Alpha (PHA)">Zeta Tau Alpha (PHA)</option>
    <option value="alpha Kappa Delta Phi Sorority, Inc. (MGC)">alpha Kappa Delta Phi Sorority, Inc. (MGC)</option>
    <option value="N/A">N/A</option>
  </select>
  <label for="loc-affiliations">Chapters</label>
  <div class="help-block with-errors"></div>
</div>
`

// check if male or female to set chapters accordingly
$("#gender").change(function(){
  if($('#gender').val()=="Male"){
      $(".chapter-content").detach();
      $(".chapter-div").append(faternity);
      $("form").validator('update');

  }
  else if ($('#gender').val()=="Female") {
    $(".chapter-content").detach();
    $(".chapter-div").append(sorority);
    $("form").validator('update');

  }
  else {
    $(".chapter-content").detach();
    $(".chapter-div").append(chapters);
    $("form").validator('update');

  }

})



//function to set the min value of 'to' date as the value of 'from' date
function dateToFunction(fromDate, toDate) {
  var fromDateVar = $('#'+fromDate).val();
  $('#'+toDate).attr("min" , fromDateVar);
}

//function to set value of input field as current date(this field is invisible we only need it for the spreadsheet)
function setInputDate(_id){
    var _dat = document.querySelector(_id);
    var hoy = new Date(),
        d = hoy.getDate(),
        m = hoy.getMonth()+1,
        y = hoy.getFullYear(),
        t = hoy.toTimeString(),
        data;

    if(d < 10){
        d = "0"+d;
    };
    if(m < 10){
        m = "0"+m;
    };

    data = y+"-"+m+"-"+d+" ("+t+")";
    // console.log(data);
    _dat.value = data;
};

// setInputDate("#submitDate");

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

// new rental history entry
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

// new employer history entry
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
