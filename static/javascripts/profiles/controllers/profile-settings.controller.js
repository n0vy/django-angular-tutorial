angular.module('borg.profiles.controllers')
  .controller('ProfileSettingsController', function ($location, $cookies, $routeParams, $scope, Profile) {
    var username = $routeParams.username.substr(1);

    // Redirect if not logged in.
    if (!$cookies.authenticatedUser) {
      $location.path('/');
    } else {
      var authenticatedUser = JSON.parse($cookies.authenticatedUser);

      // Redirect if logged in, but not the owner of this profile.
      if (authenticatedUser.username !== username) {
        $location.path('/');
      }
    }

    Profile.get(username).then(
      function (data, status, headers, config) {
        $scope.account = data.data;
      },
      function (data, status, headers, config) {
        console.log(data);
      }
    );
  });
