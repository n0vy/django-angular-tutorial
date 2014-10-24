angular.module('borg.authentication.controllers')
  .controller('LoginController', function ($scope, Authentication, Redirect, Snackbar) {
    // Logged in users should not be on this page.
    if (Authentication.authenticatedUser()) {
      Redirect.index();
    }

    $scope.login = function () {
      Authentication.login($scope.username, $scope.password)
        .then(function (data, status, headers, config) {
          Authentication.setAuthenticatedUser(data.data);

          Redirect.index({ reload: true });
        }, function (data, status, headers, config) {
          Snackbar.error(data.error);
        });
    };
  });
