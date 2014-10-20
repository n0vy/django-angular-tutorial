angular.module('borg.thoughts.directives')
  .directive('thoughts', function () {
    return {
      controller: 'ThoughtsController',
      scope: {
        authenticatedUser: '=',
        thoughts: '='
      },
      restrict: 'E',
      templateUrl: '/static/templates/thoughts/thoughts.html' 
    };
  });
