angular.module('app.controllers', ['ionic','ngCordova'])
  
.controller('graphCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {
   function draw() {
    try {
      functionPlot({
        target: '#plot',
        data: [{
          fn: document.getElementById('eq').value,
          sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
          graphType: 'polyline'
        }]
      });
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
  }

  document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    draw();
  };

  draw();




}])
   
.controller('flashCardsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

  var a, b, c, d, answer;
            var questions = [];
            var ed = ["E", "HS"];
            
            var div = function  DivProblem() {
                if (ed[1]) {
                    a = (int)(1 + 9 * Math.random());
                    b = (int)(1 + 9 * Math.random());
                    answer = Math.round(a / b);
                    document.getElementById('q1').innerText = a+' / '+b+' = ?';
                    document.getElementById('a1').innerText= answer; 
                } else {
                    a = (int)(1 + 9 * Math.random());
                    b = (int)(1 + 9 * Math.random());
                    c = (int)(1 + 9 * Math.random());
                    d = (int)(1 + 9 * Math.random());
                    answer = Math.round((a / b) / (c / d));
                    document.getElementById('q1').innerText = '('+a+' / '+b+')/( '+c+'/'+d+  ' = ?';
                    document.getElementById('a1').innerText= answer; 
                }
            }

            var mult = function  MultProblem() {
                if (ed[0]) {
                    a = (int)(1 + 9 * Math.random());
                    b = (int)(1 + 9 * Math.random());
                    answer = Math.round(a * b);
                    document.getElementById('q2').innerText = a+' * '+b+' = ?';
                    document.getElementById('a2').innerText= answer;
                } else {
                    a = (int)(1 + 9 * Math.random());
                    b = (int)(1 + 9 * Math.random());
                    c = (int)(1 + 9 * Math.random());
                    d = (int)(1 + 9 * Math.random());
                    answer = Math.round((a / b) * (c / d));
                    document.getElementById('q2').innerText = '('+a+' / '+b+')*( '+c+'/'+d+  ' = ?';
                    document.getElementById('a2').innerText= answer; 
                }
            }

            var add = function  AddProblem() {
                if (ed[0]) {
                    a = (int)(1 + 9 * Math.random());
                    b = (int)(1 + 9 * Math.random());
                    answer = Math.round(a + b);
                    document.getElementById('q3').innerText = a+' + '+b+' = ?';
                    document.getElementById('a3').innerText= answer;
                } else {
                    a = (int)(1 + 9 * Math.random());
                    b = (int)(1 + 9 * Math.random());
                    c = (int)(1 + 9 * Math.random());
                    d = (int)(1 + 9 * Math.random());
                    answer = Math.round((a / b) + (c / d));
                    document.getElementById('q3').innerText = '('+a+' / '+b+')+( '+c+'/'+d+  ' = ?';
                    document.getElementById('a3').innerText= answer; 
                }
            }

            var sub = function  SubProblem() {
                if (ed[0]) {
                    a = (int)(1 + 9 * Math.random());
                    b = (int)(1 + 9 * Math.random());
                    answer = Math.round(a - b);
                    document.getElementById('q4').innerText = a+' - '+b+' = ?';
                    document.getElementById('a4').innerText= answer;
                } else {
                    a = (int)(1 + 9 * Math.random());
                    b = (int)(1 + 9 * Math.random());
                    c = (int)(1 + 9 * Math.random());
                    d = (int)(1 + 9 * Math.random());
                    answer = Math.round((a / b) - (c / d));
                    document.getElementById('q4').innerText = '('+a+' / '+b+')-( '+c+'/'+d+  ' = ?';
                    document.getElementById('a4').innerText= answer; 
                }
            }

div();
mult();
add();
sub();
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
 