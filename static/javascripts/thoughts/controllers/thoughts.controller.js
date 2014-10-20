angular.module('borg.thoughts.controllers')
  .controller('ThoughtsController', function ($scope) {
    $scope.nodes = [];

    var calculateNumberOfColumns = function () {
      var width = $(window).width();

      if (width >= 1200) { return 4; } 
      else if (width >= 992) { return 3; } 
      else if (width >= 768) { return 2; } 
      
      return 1;
    };

    var getSmallestNode = function () {
      var scores = $scope.nodes.map(function (node) {
        var sum = function (a, b) { return a + b; };

        var lengths = node.map(function (element) {
          return element.content.length;
        });

        return lengths().reduce(sum, 0) * node.length;
      });

      return scores.indexOf(
        Math.min.apply(this, scores)
      );
    };

    var render = function (newValue, oldValue) {
      if (newValue !== oldValue) {
        $scope.nodes = [];

        var numberOfColumns = calculateNumberOfColumns();

        for (var i = 0; i < numberOfColumns; ++i) {
          $scope.nodes.push([]);
        }

        for (var i = 0; i < thoughts.length; ++i) {
          var node = getSmallestNode();

          $scope.nodes[node].push(thoughts[i]);
        }
      }
    };


    $scope.$watch(function () { return $scope.thoughts; }, render);
    $scope.$watch(function () { return $(window).width(); }, render);
  });
