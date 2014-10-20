angular.module('borg.authentication.controllers')
  .controller('RegisterController', function ($cookies, $scope, $location, Authentication) {
    if ($cookies.authenticatedUser) {
      $location.path('/');
    }

    $scope.login = function (username, password) {
      Authentication.login(username, password).then(
        function (data, status, headers, config) {
          $cookies.authenticatedUser = data;

          window.location = '/';
        }, 
        function (data, status, headers, config) {
          console.log(data);
        }
      );
    };

    $scope.register = function () {
      Authentication.register($scope.username, $scope.password, $scope.email).then(
        function (data, status, headers, config) {
          $scope.login($scope.username, $scope.password);
        },
        function (data, status, headers, config) {
          console.log(data);
        }
      );
    };
  });
