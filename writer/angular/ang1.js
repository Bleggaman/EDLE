var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";


    $scope.facts = {}
    $scope.funFact = ""
    $scope.addFact =  function(funFact) {
        console.log($scope.funFact);
        $scope.facts[Object.keys($scope.facts).length] = funFact;
        console.log($scope.facts);
        $scope.funFact = "";
    }
    console.log($scope.facts)


    $scope.name = "Enter Name Here";
    $scope.bio = "";
    $scope.location = "Your City, State";
    $scope.degree = "Your Degree";
    $scope.jobTitle = "Your Profession";
    $scope.company = "Your Company";
    $scope.profile_pic = "";
    $scope.searchString = "";

console.log("init")
    $scope.writeData = function writeData() {

        console.log("init")
        var id = Math.floor(Math.random() * 200);
        $scope.searchString = $scope.name  + "_" + $scope.degree  + "_" + $scope.jobTitle + "_" + $scope.company + "_" + $scope.location +"_" + id;
          firebase.database().ref('users/' + $scope.searchString).set({
            "name": $scope.name,
            "bio": $scope.bio,
            "location": $scope.location,
            "degree": $scope.degree,
            "jobTitle": $scope.jobTitle,
            "company": $scope.company,
            "profile_pic": $scope.profile_pic,
            "facts": $scope.facts
          });
    }

});
