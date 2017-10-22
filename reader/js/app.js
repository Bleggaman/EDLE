var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    $scope.isMatch = function isMatch(query, entry) {
        // query: search object
        // entry: data object
        return Object.keys(query).every((key) => entry[key].toLowerCase().includes(query[key].toLowerCase()));
      }

      $scope.entryToElement = function entryToElement(entry) {
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

      data = [
    {
      "bio" : "",
      "company" : "Your Company",
      "degree" : "",
      "jobTitle" : "Your Profession",
      "location" : "Your City, State",
      "name" : "Enter Name Here",
      "profile_pic" : ""
    },
    {
      "bio" : "",
      "company" : "Edle",
      "degree" : "",
      "facts" : [ "I have been a Fizz jungle one trick pony since season 2", "I have beaten a 2200 elo chess player" ],
      "jobTitle" : "Co-founder",
      "location" : "Seattle, WA",
      "name" : "Varun Viswanath",
      "profile_pic" : ""
    }];

      $scope.name = "";
      $scope.jobTitle ="";
      $scope.company = "";
      $scope.state = "";
      $scope.city = "";

      $scope.results = []

      $scope.submit = function submit() {
          var database = firebase.database();
          console.log(database.ref("users").once('value'));

          var query = {"name" :$scope.name, "jobTitle": $scope.jobTitle, "company": $scope.company, "state": $scope.state, "city": $scope.city};
          $scope.results = [];
          $scope.results = data.filter((entry) => $scope.isMatch(query, entry));
        }

        $("a[data-toggle=\"tab\"]").click(function(e) {
          e.preventDefault();
          $(this).tab("show");
        });
      });
