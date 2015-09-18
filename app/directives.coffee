'use strict'

NestedList.directive 'nodeCollection', ()->
  return {
    restrict: 'E'
    replace: on
    scope:
      collection: "="
    templateUrl: './templates/list.html'
  }

NestedList.directive 'listNode', ($compile)->
  {
    restrict: 'E'
    replace: on
    scope:
      node: "="
      parent: "="
    templateUrl: './templates/list-item.html'
    controller: ($scope, $element)->

      $scope.addNode = ()->
        $scope.node.children.push {
          name: "New node"
          expanded: off
          children: []
        }

        if $scope.node.children.length and !$scope.node.expanded
          $scope.node.expanded = on

      $scope.updateNode = ()->
        $scope.node.editMode = !$scope.node.editMode

      $scope.removeNode = ()->
        $scope.$parent.collection.splice $scope.$parent.collection.indexOf($scope.node), 1

      $scope.toggleCollapse = ()->
        $scope.node.expanded = !$scope.node.expanded

    link: (scope, element, attrs)->

      if angular.isArray(scope.node.children)
        $compile("<node-collection ng-show='node.expanded' ng-if='node.children.length' collection='node.children'></node-collection>")(scope, (cloned)->
          element.append(cloned)
        )
  }

NestedList.directive 'enterPress', ()->
  (scope, element, attrs)->
    element.on 'keydown keypress', (event)->
      if event.which is 13
        scope.$apply ()->
          scope.$eval(attrs.enterPress)

        event.preventDefault()

    element.on 'blur', ()->
      scope.$apply ()->
        scope.$eval(attrs.enterPress)
