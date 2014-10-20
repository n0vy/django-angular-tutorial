angular.module('borg.static.controllers')
  .controller('BorgController', function ($cookies, $rootScope, $scope, Thoughts) {
    $scope.authenticatedUser = $cookies.authenticatedUser;
    $scope.thoughts = [];

    var getAllThoughts = function () {
      Thoughts.all().then(
        function (data, status, headers, config) {
          $scope.thoughts = data.data;
        },
        function (data, status, headesr, config) {
          $scope.thoughts = null;
        }
      );
    };

    $rootScope.$on('thought.created', function () {
      getAllThoughts();
    });

    getAllThoughts();
  });
