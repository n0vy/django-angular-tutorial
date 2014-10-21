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

    $scope.update = function () {
      var options = {
        timeout: 3000
      };

      Profile.update($scope.account).then(
        function (data, status, headers, config) {
          options.content = 'Your profile has been updated.';

          $.snackbar(options);
        },
        function (data, status, headers, config) {
          console.log(data);
          options.content = 'Error: ' + data.error;

          $.snackbar(options);
        }
      );
    };

    $scope.destroy = function () {
      var options = {
        timeout: 3000
      };

      Profile.destroy($scope.account).then(
        function (data, status, headers, config) {
          delete $cookies.authenticatedUser;
          window.location = '/';

          options.content = 'You have disconnected from The Borg.';

          $.snackbar(options);
        },
        function (data, status, headers, config) {
          options.content = 'YOU MUST NOT DISCONNECT FROM THE BORG!';

          $.snackbar(options);
        }
      );
    };
  });
