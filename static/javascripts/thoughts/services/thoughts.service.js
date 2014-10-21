angular.module('borg.thoughts.services')
  .service('Thoughts', function ($cookies, $http) {
    var Thoughts = {
      all: function () {
        return $http.get('/api/v1/thoughts/');
      },

      create: function (content) {
        return $http.post('/api/v1/thoughts/', {
          content: content
        });
      },

      get: function (username) {
        return $http.get('/api/v1/accounts/' + username + '/thoughts/');
      }
    };

    return Thoughts;
  });
