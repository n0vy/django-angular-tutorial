angular.module('borg.profiles.controllers')
  .controller('ProfileSettingsController', function ($location, $cookies, $routeParams, $scope, Profile) {
    var authenticatedUser = JSON.parse($cookies.authenticatedUser);
    var profileOwner = $routeParams.username.substr(1);

    if (authenticatedUser.username !== profileOwner) {
      $location.path('/');
    }
  });
