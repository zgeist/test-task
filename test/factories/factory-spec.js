describe('storeData', function(){
  var values, factory, service, defaults = [
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
  ];

  beforeEach(function(){
    module('NestedList');

    inject(function($injector){
      values = $injector.get('defaultData');
      factory = $injector.get('storeData');
      service = $injector.get('$localStorage');
    })
  });

  describe('defaultData', function(){
    it('Should instantiate with some nodes', function() {
      expect(values).toEqual(defaults)
    })
  });

  describe('storeData', function(){
    it('Should return some array data from localStorage or values', function(){
      expect(typeof factory).toEqual('object')
    })
  })

  describe('$localStorage', function(){

    it('Should save array data from localStorage', function(){
      var result = service.save([
        {
          test: 'Test'
        }
      ])

      expect(result).toEqual(true)
    });

    it('Should return array data from localStorage', function(){
      var data = service.get();

      expect(data).toEqual([{
        test: 'Test'
      }])
    });
  })

});