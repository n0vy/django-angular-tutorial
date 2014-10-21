angular.module('borg', [
  'ngCookies',
  'borg.config',
  'borg.routes',
  'borg.authentication',
  'borg.profiles',
  'borg.static',
  'borg.thoughts'
]);

angular.module('borg.config', []);
angular.module('borg.routes', ['ngRoute']);

angular.module('borg')
  .run(function ($http, $cookies) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  });
