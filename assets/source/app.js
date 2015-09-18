'use strict';
var NestedList;

NestedList = angular.module('NestedList', []);

NestedList.constant('defaultData', [
  {
    name: 'Parent 1',
    expanded: false,
    children: [
      {
        name: 'Child 1',
        expanded: false,
        children: [
          {
            name: 'SubChild 1',
            expanded: false,
            children: [
              {
                name: 'Child 1',
                expanded: false,
                children: []
              }, {
                name: 'Child 1',
                expanded: false,
                children: []
              }, {
                name: 'Child 1',
                expanded: false,
                children: []
              }
            ]
          }
        ]
      }, {
        name: 'Child 2',
        expanded: false,
        children: []
      }
    ]
  }, {
    name: 'Parent 2',
    expanded: false,
    children: []
  }
]);

NestedList.service('$localStorage', function() {
  return {
    save: function(data) {
      localStorage.setItem('nestedList', JSON.stringify(data));
      return true;
    },
    get: function() {
      return JSON.parse(localStorage.getItem('nestedList'));
    }
  };
});

NestedList.factory('storeData', function(defaultData, $localStorage) {
  return $localStorage.get() || defaultData;
});
