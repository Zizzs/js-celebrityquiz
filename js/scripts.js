$(document).ready(function() {

  $("#formInfo").submit(function(event) {
    //debugger
   var ageTemp = $("input#ageInput").val();
   console.log(ageTemp);
    if (ageTemp > 35) {
      $("#celebrityOne").show();
      $("#celebrityTwo").hide();
      $("#celebrityThree").hide();
    } else if (ageTemp < 35) {
      $("#celebrityOne").hide();
      $("#celebrityTwo").show();
      $("#celebrityThree").hide();
    } else {
      $("#celebrityOne").hide();
      $("#celebrityTwo").hide();
      $("#celebrityThree").show();
    }

  event.preventDefault();
  });

 });
