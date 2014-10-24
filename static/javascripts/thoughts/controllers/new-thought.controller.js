angular.module('borg.thoughts.controllers')
  .controller('NewThoughtController', function ($rootScope, $scope, Snackbar, Thoughts) {
    $scope.submit = function () {
      $scope.closeThisDialog();

      Thoughts.create($scope.content).then(
        function (data, status, headers, config) {
          $rootScope.$broadcast('thought.created');

          Snackbar.show('Success! Your thought has been uploaded to the Collective.');
        },
        function (data, status, headers, config) {
          Snackbar.error(data.error);
        }
      );
    };
  });
