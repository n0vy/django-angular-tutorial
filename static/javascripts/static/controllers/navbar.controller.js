angular.module('borg.static.controllers')
  .controller('NavbarController', function ($scope, Authentication, Redirect) {
    $scope.logout = function () {
      Authentication.logout().then(
        function (data, status, headers, config) {
          Authentication.unauthenticate();
          Redirect.index({ reload: true });
        }
      );
    };
  });
