import LocationModule from './location'

describe('Location', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(LocationModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('location component should be here', () => {
      $location.url('/location');
      $rootScope.$digest();
      expect($state.current.component).to.eq('location');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('location', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<location></location>')(scope);
      scope.$apply();
    });
  });
});
