angular.module('app.controllers', ['ionic','ngCordova'])
  
.controller('graphCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('flashCardsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller("loginCtrl", function($scope, $cordovaSQLite, $ionicPopup, $state){

    $scope.checkUser = function(login){
      console.log(login.userName);
      var query = "SELECT userName, password FROM users WHERE (userName = ?) and (password = ?)";
      //console.log(login.userName)
      $cordovaSQLite.execute(db, query,[login.userName, login.password]).then(function(res){
        console.log(login.password);
        if(res.rows.length > 0){
          console.log("SELECTED -> " + res.rows.item(0).userName + " " + res.rows.item(0).password);
          $state.go('menu.graph')
        }
        else{
          console.log("No Results Found");
           var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        }
    });
    }
    // $scope.login = function(login) {
    //     console.log("LOGIN user: " + login.username + " - PW: " + login.password);
    // }
})

.controller('signupCtrl', function ($scope, $cordovaSQLite, $ionicPopup, $state) {
    $scope.add = function(user){
    var query="INSERT INTO users (firstName, lastName, age, country, education, userName, password) VALUES(?,?,?,?,?,?,?)";
    $cordovaSQLite.execute(db, query, [user.firstName, user.lastName, user.age, user.country, user.education, user.name, user.password]);
    var alertPopup = $ionicPopup.alert({
                title: 'User Saved!'
        });
    $state.go('login')
    // $scope.load();
} //function() {
             
    //};
})

  

.controller('quizCreatorCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])

 .controller('logOutCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
 