angular.module('borg.thoughts.directives')
  .directive('thoughts', function () {
    return {
      controller: 'ThoughtsController',
      scope: {
        thoughts: '='
      },
      restrict: 'E',
      templateUrl: '/static/templates/thoughts/thoughts.html' 
    };
  });
