app.factory('PiratesService', function ($http, $location, $routeParams) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    one: function () {
      return $http.get('/api/pirates/' + $routeParams.pirateId)
    },
    update: function (pirateId) {
      return $http.post(pirateId + '/edit')
    }
  }
})
