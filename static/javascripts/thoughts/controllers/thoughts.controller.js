angular.module('borg.thoughts.controllers')
  .controller('ThoughtsController', function ($scope) {
    $scope.nodes = [];
    $scope.columns = 0;

    var getSmallestNode = function () {
      var heights = $scope.nodes.map(function (node) {
        return node.reduce(function (previous, current) {
          return previous + current.content.length;
        }, 0) * node.length;
      });

      return heights.indexOf(Math.min.apply(this, heights));
    };

    var calculateNumberOfColumns = function () {
      var width = $(window).width();

      if (width >= 1200) {
        $scope.columns = 4;
      } else if (width >= 992) {
        $scope.columns = 3;
      } else if (width >= 768) {
        $scope.columns = 2;
      } else {
        $scope.columns = 1;
      }
    };

    var createColumns = function () {
      calculateNumberOfColumns();

      $scope.nodes = [];

      for (var i = 0; i < $scope.columns; ++i) {
        $scope.nodes.push([]);
      }
    };

    var fillColumns = function (thoughts) {
      for (var i = 0; i < thoughts.length; ++i) {
        var node = getSmallestNode();
        $scope.nodes[node].push(thoughts[i]);
      }
    };

    var render = function (newValue, oldValue) {
      if (newValue !== oldValue) {
        createColumns();
        fillColumns(newValue);
      }
    };


    $scope.$watch(function () { return $scope.thoughts; }, render);
    $scope.$watch(function () { return $(window).width(); }, render);
  });
