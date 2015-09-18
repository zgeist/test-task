'use strict';
NestedList.directive('nodeCollection', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      collection: "="
    },
    templateUrl: './templates/list.html'
  };
});

NestedList.directive('listNode', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      node: "=",
      parent: "="
    },
    templateUrl: './templates/list-item.html',
    controller: function($scope, $element) {
      $scope.addNode = function() {
        $scope.node.children.push({
          name: "New node",
          expanded: false,
          children: []
        });
        if ($scope.node.children.length && !$scope.node.expanded) {
          return $scope.node.expanded = true;
        }
      };
      $scope.updateNode = function() {
        return $scope.node.editMode = !$scope.node.editMode;
      };
      $scope.removeNode = function() {
        return $scope.$parent.collection.splice($scope.$parent.collection.indexOf($scope.node), 1);
      };
      return $scope.toggleCollapse = function() {
        return $scope.node.expanded = !$scope.node.expanded;
      };
    },
    link: function(scope, element, attrs) {
      if (angular.isArray(scope.node.children)) {
        return $compile("<node-collection ng-show='node.expanded' ng-if='node.children.length' collection='node.children'></node-collection>")(scope, function(cloned) {
          return element.append(cloned);
        });
      }
    }
  };
});

NestedList.directive('enterPress', function() {
  return function(scope, element, attrs) {
    element.on('keydown keypress', function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          return scope.$eval(attrs.enterPress);
        });
        return event.preventDefault();
      }
    });
    return element.on('blur', function() {
      return scope.$apply(function() {
        return scope.$eval(attrs.enterPress);
      });
    });
  };
});
