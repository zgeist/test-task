describe('NestedListCtrl', function(){
  var $rootScope, $scope, controller;

  beforeEach(function(){
    module('NestedList');

    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new()
      controller = $injector.get('$controller')('NestedListCtrl', {$scope: $scope})
    })
  });

  describe('Initialization', function(){
    it('Should return test object', function(){
      expect(typeof $scope.list).toEqual('object')
    })
  });
});