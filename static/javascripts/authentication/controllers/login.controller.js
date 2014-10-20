angular.module('borg.authentication.controllers')
  .controller('LoginController', function ($cookies, $location, $scope, Authentication) {
    if ($cookies.authenticatedUser) {
      $location.path('/');
    }

    $scope.login = function () {
      Authentication.login($scope.username, $scope.password)
        .then(function (data, status, headers, config) {
          $cookies.authenticatedUser = data;

          window.location = '/';
        }, function (response) {
          $scope.error = response.data.error;
        });
    };
  });
