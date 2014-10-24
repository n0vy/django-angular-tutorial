angular.module('borg.profiles.controllers')
  .controller('ProfileSettingsController', function ($routeParams, $scope, Authentication, Profile, Redirect, Snackbar) {
    var authenticatedUser = Authentication.authenticatedUser();
    var username = $routeParams.username.substr(1);

    // Redirect if not logged in.
    if (!authenticatedUser) {
      Redirect.index();
    } else {
      // Redirect if logged in, but not the owner of this profile.
      if (authenticatedUser.username !== username) {
        Redirect.index();
      }
    }

    Profile.get(username).then(
      function (data, status, headers, config) {
        $scope.account = data.data;
      },
      function (data, status, headers, config) {
        Redirect.index();
        Snackbar.show('That user does not exist.');
      }
    );

    $scope.update = function () {
      Profile.update($scope.account).then(
        function (data, status, headers, config) {
          Snackbar.show('Your profile has been updated.');
        },
        function (data, status, headers, config) {
          Snackbar.error(data.error);
        }
      );
    };

    $scope.destroy = function () {
      Profile.destroy($scope.account).then(
        function (data, status, headers, config) {
          Authentication.unauthenticate();
          Redirect.index({ reload: true });

          Snackbar.show('You have disconnected from The Borg.');
        },
        function (data, status, headers, config) {
          Snackbar.error(data.error);
        }
      );
    };
  });
