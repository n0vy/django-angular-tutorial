angular.module('borg.profiles.controllers')
  .controller('ProfileController', function ($cookies, $routeParams, $scope, Profile, Thoughts) {
    $scope.authenticatedUser = $cookies.authenticatedUser;

    var username = $routeParams.username;

    Profile.get(username).then(
      function (data, status, headers, config) {
        $scope.account = data.data;
      },
      function (data, status, headers, config) {
        console.log('Profile:', data);
      }
    );

    Thoughts.get(username.substr(1)).then(
      function (data, status, headers, config) {
        $scope.thoughts = data.data;
      },
      function (data, status, headers, config) {
        console.log('Thoughts:', data);
      }
    );
  });
