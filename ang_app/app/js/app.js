var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/splash.html',
        controller: 'MainController'
      })
      .when('/stories', {
        templateUrl: 'partials/allStories.html',
        controller: 'StoriesController'
      })
      .when('/stories/new', {
        templateUrl: 'partials/new.html',
        controller: 'PostController'
      })
      .when('/stories/random', {
        templateUrl: 'partials/show.html',
        controller: 'RandomController'
      })
    $locationProvider.html5Mode(true);
});
