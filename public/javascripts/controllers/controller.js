app.controller('piratesController', function($scope, $location, $window, PiratesService, $http, $routeParams){

$scope.view = {};
$scope.view.greeting = "Yargh, 'tis a fine day for pillage and plunder!"

$scope.view.getData = PiratesService.all()
  .then(function(data){
  $scope.view.pirates = data.data;
});

$scope.view.edit = PiratesService.one()
    .then(function(data){
    $scope.view.pirate = data.data;
});

$scope.view.addPirate = function() {
  $location.path('/api/pirates');
  $window.location.reload();
}

$scope.view.update = function (pirate) {
  var pirateId = pirate.id;
  return $http({
    method: 'post',
    url: '/api/pirates/' + pirateId,
    data: pirate
  }).then(function(){
    $location.path('/')
  })
}
});
