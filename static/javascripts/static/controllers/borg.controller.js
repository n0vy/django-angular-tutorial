angular.module('borg.static.controllers')
  .controller('BorgController', function ($scope, Authentication, Snackbar, Thoughts) {
    $scope.authenticatedUser = Authentication.authenticatedUser();
    $scope.thoughts = [];

    var getThoughts = function () {
      Thoughts.all().then(
        function (data, status, headers, config) {
          $scope.thoughts = data.data;
        },
        function (data, status, headesr, config) {
          $scope.thoughts = null;
          Snackbar.error(data.error);
        }
      );
    };

    getThoughts();

    $scope.$on('thought.created', getThoughts);
  });
