angular.module('borg.thoughts.directives')
  .directive('thoughtList', function () {
    return {
      scope: {
        thoughts: '='
      },
      restrict: 'E',
      templateUrl: '/static/templates/thoughts/list.html'
    };
  });
