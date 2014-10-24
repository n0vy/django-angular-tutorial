angular.module('borg.thoughts.directives')
  .directive('thought', function () {
    return {
      scope: {
        thought: '='
      },
      restrict: 'E',
      templateUrl: '/static/templates/thoughts/thought.html'
    };
  });
