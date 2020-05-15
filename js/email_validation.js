$("#applicant-email").change(function() {

  var restURL= "http://apilayer.net/api/check?access_key=9602c92a17b0e0b7dcf8436c3a53e836&email="+$("#applicant-email").val()+"&smtp=1&format=1";
  $.ajax({
    type : 'GET',
    url :restURL,
    dataType :'json',
    success : renderList,

  });
  return false;
});



function renderList(data) {
  if ((data.format_valid == true) && (data.smtp_check == true) ) {
    console.log("Email address is valid");
    $("#applicant-email").removeClass("is-invalid");
    $("#applicant-email").addClass("is-valid");
    return true;
  }
  else {
    console.log("Email address is not valid");
    $("#applicant-email").removeClass("is-valid");
    $("#applicant-email").addClass("is-invalid");

    return false;
  }
}

// function renderError(data) {
//   // if (data.code == 104) {
//     console.log("server error");
//   // }
// }

$("#parent-1-email").change(function() {

  var restURL= "http://apilayer.net/api/check?access_key=9602c92a17b0e0b7dcf8436c3a53e836&email="+$("#parent-1-email").val()+"&smtp=1&format=1";
  $.ajax({
    type : 'GET',
    url :restURL,
    dataType :'json',
    success : renderList2,
  });
  return false;
});



function renderList2(data) {
  if ((data.format_valid == true) && (data.smtp_check == true) ) {
    console.log("Email address is valid");
    $("#parent-1-email").removeClass("is-invalid");
    $("#parent-1-email").addClass("is-valid");
    return true;
  }
  else {
    console.log("Email address is not valid");
    $("#parent-1-email").removeClass("is-valid");
    $("#parent-1-email").addClass("is-invalid");

    return false;
  }
}

$("#parent-2-email").change(function() {

  var restURL= "http://apilayer.net/api/check?access_key=9602c92a17b0e0b7dcf8436c3a53e836&email="+$("#parent-2-email").val()+"&smtp=1&format=1";
  $.ajax({
    type : 'GET',
    url :restURL,
    dataType :'json',
    success : renderList3,
  });
  return false;
});



function renderList3(data) {
  if ((data.format_valid == true) && (data.smtp_check == true) ) {
    console.log("Email address is valid");
    $("#parent-2-email").removeClass("is-invalid");
    $("#parent-2-email").addClass("is-valid");
    return true;
  }
  else {
    console.log("Email address is not valid");
    $("#parent-2-email").removeClass("is-valid");
    $("#parent-2-email").addClass("is-invalid");

    return false;
  }
}
