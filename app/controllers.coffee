'use strict'

NestedList.controller 'NestedListCtrl', ($scope, storeData, $localStorage)->

  $scope.list = storeData

  $scope.$watch 'list', (newValue)->

    $localStorage.save newValue

  , on
