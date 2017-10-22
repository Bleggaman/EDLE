"use strict";

$(function() {

  $("button#sendMessageButton").click(function() {
    var name = $("input#name").val();
    var jobTitle = $("input#jobTitle").val();
    var company = $("input#company").val();
    var state = $("input#state").val();
    var city = $("input#city").val();
    alert(name+jobTitle+company+state+city);
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
