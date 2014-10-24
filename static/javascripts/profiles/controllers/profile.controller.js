angular.module('borg.profiles.controllers')
  .controller('ProfileController', function ($routeParams, $scope, Authentication, Profile, Redirect, Snackbar, Thoughts) {
    $scope.authenticatedUser = Authentication.authenticatedUser();

    var username = $routeParams.username.substr(1);

    Profile.get(username).then(
      function (data, status, headers, config) {
        $scope.account = data.data;
      },
      function (data, status, headers, config) {
        Redirect.index();
        Snackbar.error('That user does not exist.');
      }
    );

    Thoughts.get(username).then(
      function (data, status, headers, config) {
        $scope.thoughts = data.data;
      },
      function (data, status, headers, config) {
        Snackbar.error(data.error);
      }
    );
  });
