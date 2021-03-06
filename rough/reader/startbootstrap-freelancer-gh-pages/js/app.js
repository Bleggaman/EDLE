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
    
      $scope.name = "";
      $scope.jobTitle =""; 
      $scope.company = "";
      $scope.state = ""; 
      $scope.city = "";

      $scope.results = []

      $scope.submit = function submit() {
          var query = {"name" :$scope.name, "jobTitle": $scope.jobTitle, "company": $scope.company, "state": $scope.state, "city": $scope.city};
          $scope.results = [];
          $scope.results = data.filter((entry) => $scope.isMatch(query, entry));
        }
        
        $("a[data-toggle=\"tab\"]").click(function(e) {
          e.preventDefault();
          $(this).tab("show");
        });
      });