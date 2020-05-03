$("#myForm").validator().on("submit", function(event) {
  if (event.isDefaultPrevented()) {
        // handle the invalid form...
        // cformError();
        // csubmitMSG(false, "Please fill all fields!");
        console.log("error");
    } else {
        // everything looks good!
        event.preventDefault();
        csubmitForm();
        console.log("Success");
    }
});
function csubmitForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxcBdPBu-sKht-W_qPSSk9hnX7_o8hL0piBsIDz-hF9W_iBWg/exec'
  const form = document.forms['rental-app-form']
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
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

// const getCurrentPanel = () => {
//   var currentPanel = $(".js-active");
//   return currentPanel;
// };


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
    console.log("Click Prev");
    activePanelNum--;
    window.scroll(0, 265);

  } else {
    checkRequired();
    console.log("Click Next");
    if(($("div").hasClass("has-error"))==true || checkRequired()== false){

      $(".nextBtn").prop('disabled',false)
      console.log("Check invalid fields");
      var currentPanel =getCurrentPanel();
      currentPanel.validator('validate');
      // activePanel.validator('validate');

      // .validator('validate');
    }
    else {
      console.log("Click next");
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


toggleFields();

 $("#car-select").change(function () {
    toggleFields();
});

function toggleFields() {
    const x = $(".car-div");
    if (!($("#car-select").val() === "Yes")){
      $(".car-div").slideUp();
      $(".car-field").attr("required",false);
    }

    else{

      $(".car-div").slideDown();
      $(".car-field").attr("required",true);
    }
}

function toggleOther() {
  const x =$(".other-div");
  if (!($("#note-reason").val()=== "Other")) {
    $(".other-div").slideUp();
    $("#Other").attr("required",false);
  }
  else {
    $(".other-div").slideDown();
    $("#Other").attr("required",true);
  }
}
toggleOther();
$("#note-reason").change(function () {
   toggleOther();
});


// function toggleFields(){
//       if ($("#car-select").val() === "Yes"){
//         car
//         // $(".car-div").slideDown();
//         // $(".car-field").attr("required",true);
//       }
//
//       else{
//         $(".car-div").slideUp();
//         $(".car-field").attr("required",false);
//       }
// }

$('#yesCheck').click(function() {
    $('#ifYesCheck').slideDown();
    $("#note-reason").attr("required",true);

});
$('#noCheck').click(function() {
    $('#ifYesCheck').slideUp();
    $("#note-reason").attr("required",false);
});

////My Scripts/////
// function addEntry2(){
// 	$("#readroot2:last").clone().appendTo("#writeroot2");
// }
// function addEntry1(){
// 	$("#readroot:last").clone().appendTo("#writeroot");
// }
