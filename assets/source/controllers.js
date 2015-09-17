'use strict';
NestedList.controller('NestedListCtrl', function($scope, storeData, $localStorage) {
  $scope.list = storeData;
  return $scope.$watch('list', function(newValue) {
    return $localStorage.save(newValue);
  }, true);
});
