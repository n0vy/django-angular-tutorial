angular.module('borg.profiles.controllers')
  .controller('ProfileSettingsController', function ($location, $cookies, $routeParams, $scope, Profile) {
    // Redirect if not logged in.
    if (!$cookies.authenticatedUser) {
      $location.path('/');
    } else {
      var authenticatedUser = JSON.parse($cookies.authenticatedUser);
      var profileOwner = $routeParams.username.substr(1);

      // Redirect if logged in, but not the owner of this profile.
      if (authenticatedUser.username !== profileOwner) {
        $location.path('/');
      }
    }
  });
