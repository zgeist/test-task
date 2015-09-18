describe('nodeCollection', function(){
  var $rootScope, $scope, $compile,
    el,
    body = $('body'),
    simple = '<ul class="list-group">\
                <list-node ng-repeat="node in collection track by $index" node="node"></list-node>\
              </ul>';

  beforeEach(function(){
    module('NestedList');

    inject(function($injector){
      $rootScope = $injector('$rootScope');
      $scope = $rootScope.$new()
      $compile = $injector('$compile')
      el = $compile(angular.element(simple))($scope);
    });

    body.appendChild = el;
    $rootScope.$digest();
  });
});