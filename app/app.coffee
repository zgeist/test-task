'use strict'

NestedList = angular.module 'NestedList', []

NestedList.constant 'defaultData', [
  {
    name: 'Parent 1'
    expanded: off
    children: [
      {
        name: 'Child 1'
        expanded: off
        children: [
          name: 'SubChild 1'
          expanded: off
          children: [
            {
              name: 'Child 1'
              expanded: off
              children: []
            }
            {
              name: 'Child 1'
              expanded: off
              children: []
            }
            {
              name: 'Child 1'
              expanded: off
              children: []
            }
          ]
        ]
      }
      {
        name: 'Child 2'
        expanded: off
        children: []
      }
    ]
  }
  {
    name: 'Parent 2'
    expanded: off
    children: []
  }
]

NestedList.service '$localStorage', ()->

  {
    save: (data)->
      localStorage.setItem('nestedList', JSON.stringify(data))

      on
    get: ()->
      JSON.parse(localStorage.getItem('nestedList'))
  }

NestedList.factory 'storeData', (defaultData, $localStorage)->

  $localStorage.get() || defaultData

