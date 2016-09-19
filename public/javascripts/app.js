var app = angular.module('pirates', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/',{
      templateUrl:"/views/pirates.html",
      controller: "piratesController"
    })
    .when('/add',{
      templateUrl: "/views/addpirate.html",
      controller: "piratesController"
    })
    .when('/:pirateId/edit', {
      templateUrl: "/views/editPirate.html",
      controller: "piratesController"
    })
})
