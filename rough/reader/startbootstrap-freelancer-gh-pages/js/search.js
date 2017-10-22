"use strict";

function isMatch(query, entry) {
  // query: search object
  // entry: data object
  return Object.keys(query).every((key) => entry[key].toLowerCase().includes(query[key].toLowerCase()));
}

function entryToElement(entry) {
  var ul = $("<ul></ul>");
  for (var key in entry) {
    var curr = $("<li>" + key + ": " + entry[key] + "</li>");
    ul.append(curr);
  }
  var ans = $("<div></div>", {"class": "footer-col"});
  ans.append(ul);
  return ans;
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
    var resultElem = $("div#search-results");
    resultElem.empty();
    matches.forEach((entry) => {
      resultElem.append(entryToElement(entry));
    });
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
