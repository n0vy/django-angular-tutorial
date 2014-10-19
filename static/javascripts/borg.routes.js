angular.module('borg.routes')
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/static/templates/borg.html'
    }).when('/login', {
      templateUrl: '/static/templates/login.html'
    }).when('/register', {
      templateUrl: '/static/templates/register.html'
    });
  });
