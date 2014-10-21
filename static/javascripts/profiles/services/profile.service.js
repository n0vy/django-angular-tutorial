angular.module('borg.profiles.services')
  .service('Profile', function ($http) {
    var Profile = {
      get: function (username) {
        username = username.substr(1);

        return $http.get('/api/v1/accounts/' + username + '/');
      },
    };

    return Profile;
  });
