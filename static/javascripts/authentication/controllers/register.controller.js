angular.module('borg.authentication.controllers')
  .controller('RegisterController', function ($scope, Authentication, Redirect, Snackbar) {
    // Logged in users should not be on this page.
    if (Authentication.authenticatedUser()) {
      Redirect.index();
    }

    var login = function (username, password) {
      Authentication.login(username, password).then(
        function (data, status, headers, config) {
          Authentication.setAuthenticatedUser(data.data);

          Redirect.index({ reload: true });
        }, 
        function (data, status, headers, config) {
          Snackbar.error(data.error);
        }
      );
    };

    $scope.register = function () {
      Authentication.register($scope.username, $scope.password, $scope.email).then(
        function (data, status, headers, config) {
          login($scope.username, $scope.password);
        },
        function (data, status, headers, config) {
          Snackbar.error(data.error);
        }
      );
    };
  });
