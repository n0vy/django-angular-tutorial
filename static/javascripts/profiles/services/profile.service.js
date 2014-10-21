angular.module('borg.profiles.services')
  .service('Profile', function ($http) {
    var Profile = {
      destroy: function (account) {
        return $http.delete('/api/v1/users/' + account.user_id + '/');
      },

      get: function (username) {
        return $http.get('/api/v1/accounts/' + username + '/');
      },

      update: function (account) {
        return $http.put('/api/v1/accounts/' + account.username + '/', account);
      }
    };

    return Profile;
  });
