angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

    .state('menu.graph', {
    url: '/Graph',
    views: {
      'side-menu21': {
        templateUrl: 'templates/graph.html',
        controller: 'graphCtrl'
      }
    }
  })

  .state('menu.flashCards', {
    url: '/flashCards',
    views: {
      'side-menu21': {
        templateUrl: 'templates/flashCards.html',
        controller: 'flashCardsCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signUp',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.quizCreator', {
    url: '/quizCreator',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quizCreator.html',
        controller: 'quizCreatorCtrl'
      }
    }
  })

  .state('menu.logOut', {
    url: '/logOut',
    views: {
      'side-menu21': {
        templateUrl: 'templates/logOut.html',
        controller: 'logOutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  
});