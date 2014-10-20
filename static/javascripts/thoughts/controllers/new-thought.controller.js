angular.module('borg.thoughts.controllers')
  .controller('NewThoughtController', function ($rootScope, $scope, Thoughts) {
    $scope.submit = function () {
      $scope.closeThisDialog();

      var options = {
        timeout: 2000
      };

      Thoughts.create($scope.content).then(
        function (data, status, headers, config) {
          $rootScope.$broadcast('thought.created');

          options.content = 'Success! Your thought has been uploaded to the Collective.';

          $.snackbar(options);
        },
        function (data, status, headers, config) {
          options.content = 'Error! Trouble connecting to the Hive Mind.';

          $.snackbar(options);
        }
      );
    };
  });
