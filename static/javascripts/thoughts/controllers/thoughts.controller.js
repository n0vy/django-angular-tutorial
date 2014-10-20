angular.module('borg.thoughts.controllers')
  .controller('ThoughtsController', function ($scope) {
    $scope.nodes = [];

    for (var i = 0; i < 4; ++i) {
      $scope.nodes.push([]);
    }

    var getSmallestNode = function () {
      var heights = $scope.nodes.map(function (node) {
        if (!node.length) { return 0; }

        return node.reduce(function (previous, current) {
          return previous + current.content.length;
        });
      });

      return heights.indexOf(Math.min.apply(this, heights));
    };

    var createColumns = function (thoughts) {
      for (var i = 0; i < thoughts.length; ++i) {
        var node = getSmallestNode();
        $scope.nodes[node].push(thoughts[i]);
      }
    };


    $scope.$watch(
      function () { 
        return $scope.thoughts; 
      },
      function (newValue, oldValue) {
        if (newValue !== oldValue) {
          createColumns(newValue);
        }
      }
    );
  });
