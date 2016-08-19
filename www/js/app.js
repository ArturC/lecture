
angular.module('calculator', ['ionic', 'calculator.controllers', 'calculator.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html'
  })


  .state('about.dash', {
    url: '/calc',
    views: {
      'about-calc': {
        templateUrl: 'templates/calculator-home.html',
        controller: 'MainCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/about');

});
