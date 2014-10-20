angular.module('borg.thoughts.services')
  .service('Thoughts', function ($http) {
    var Thoughts = {
      all: function () {
        return $http.get('/api/v1/thoughts/');
      }
    };

    return Thoughts;
  });
