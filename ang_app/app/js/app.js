var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/show.html',
        controller: 'MainController'
      })
    $locationProvider.html5Mode(true);
});
