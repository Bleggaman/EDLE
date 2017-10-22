"use strict";

function isMatch(query, entry) {
  // query: search object
  // entry: data object
  return Object.keys(query).every((key) => entry[key].toLowerCase().includes(query[key].toLowerCase()));
}

var data = [
  {"name": "jake", "jobTitle":"doctor", "company":"goodhospital", "state":"washington", "city": "seattle"},
  {"name": "jim", "jobTitle":"webdev", "company":"google", "state":"san francisco", "city": "california"}
];

$(function() {

  $("button#sendMessageButton").click(function() {
    var name = $("input#name").val();
    var jobTitle = $("input#jobTitle").val();
    var company = $("input#company").val();
    var state = $("input#state").val();
    var city = $("input#city").val();
    var query = {name, jobTitle, company, state, city};
    var matches = data.filter((entry) => isMatch(query, entry));
    alert(JSON.stringify(matches, null, 2));
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
