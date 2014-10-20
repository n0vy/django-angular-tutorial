angular.module('borg.static.controllers')
  .controller('BorgController', function ($scope, Thoughts) {
    $scope.thoughts = [];

    Thoughts.all().then(
      function (data, status, headers, config) {
        $scope.thoughts = data.data;
      },
      function (data, status, headesr, config) {
        $scope.thoughts = null;
      }
    );
  });
