angular.module('borg.static.controllers')
  .controller('NavbarController', function ($cookies, $location, $scope, $window, Authentication) {
    $scope.logout = function () {
      Authentication.logout().then(
        function (data, status, headers, config) {
          delete $cookies.authenticatedUser;

          $location.path('/');
          $window.location.reload();
        }
      );
    };
  });
