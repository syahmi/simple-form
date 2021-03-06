// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.config( function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('step-1', {
    url: "/",
    templateUrl: "step-1.html",
  })
  
  .state("step-1-fail", {
    url: "/step-1-fail",
    templateUrl: "step-1-fail.html",
  })

  .state("step-1-complete", {
    url: "/step-1-complete",
    templateUrl: "step-1-complete.html"
  })

  .state("step-2-empty", {
    url: "/step-2-empty",
    templateUrl: "step-2-empty.html"
  })

  .state("step-2-fail", {
    url: "/step-2-fail",
    templateUrl: "step-2-fail.html"
  })

  .state("step-2-complete", {
    url: "/step-2-complete",
    templateUrl: "step-2-complete.html"
  })

  .state("step-3-finish", {
    url: "/step-3-finish",
    templateUrl: "step-3-finish.html"
  });
  
  $urlRouterProvider.otherwise("/")
  
})

.controller('simple-form-ctrl', function($scope) {
});
