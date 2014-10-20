angular.module('borg.routes')
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'BorgController',
      templateUrl: '/static/templates/borg.html'
    }).when('/login', {
      controller: 'LoginController',
      templateUrl: '/static/templates/login.html'
    }).when('/register', {
      controller: 'RegisterController',
      templateUrl: '/static/templates/register.html'
    });
  });
