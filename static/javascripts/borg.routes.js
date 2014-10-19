angular.module('borg.routes')
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/static/templates/borg.html'
    }).when('/login', {
      controller: 'LoginController',
      templateUrl: '/static/templates/login.html'
    }).when('/logout', {
      controller: 'LogoutController'
    }).when('/register', {
      templateUrl: '/static/templates/register.html'
    });
  });
