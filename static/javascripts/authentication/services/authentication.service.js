angular.module('borg.authentication.services')
  .service('Authentication', function ($cookies, $http) {
    var Authentication = {
      authenticatedUser: function () {
        if (!$cookies.authenticatedUser) {
          return;
        }

        return JSON.parse($cookies.authenticatedUser);
      },

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
      }, 

      unauthenticate: function () {
        delete $cookies.authenticatedUser;
      }
    };

    return Authentication;
  });
