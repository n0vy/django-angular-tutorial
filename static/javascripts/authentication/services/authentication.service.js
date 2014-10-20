angular.module('borg.authentication.services')
  .service('Authentication', function ($http, $location, $q) {
    var Authentication = {
      login: function (username, password) {
        return $http.post('/api/v1/auth/login/', {
          username: username, password: password
        });
      },

      logout: function () {
        return $http.post('/api/v1/auth/logout/');
      },

      register: function (username, password, email) {
        return $http.post('/api/v1/users/', {
          username: username,
          password: password,
          email: email
        });
      }
    };

    return Authentication;
  });
