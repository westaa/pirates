var app = angular.module('pirates', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/pirates',{
      templateUrl: "/views/pirates.html",
      controller: "piratesController"
    })
})
